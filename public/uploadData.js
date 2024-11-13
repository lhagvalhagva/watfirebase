import { questions, protectedQuestions } from "./questions.js";

// Firebase холболт
const db = firebase.firestore();

// Зөвшөөрөгдсөн email хаягууд
const AUTHORIZED_EMAILS = ["teacher", "Bagshxd", "bibna", "aa"]; // Энд зөвшөөрөгдсөн email-үүдээ бичнэ

// Initialize database
async function initializeDatabase() {
  try {
    const snapshot = await db.collection("questions").get();
    if (snapshot.empty) {
      for (const [question, answers] of Object.entries(questions)) {
        await db.collection("questions").add({
          question: question,
          en: answers.en,
          mn: answers.mn,
          isProtected: answers.isProtected || false,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
      console.log("Database initialized successfully!");
    }
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}

// Create cards
async function createCards() {
  try {
    const container = document.getElementById("qa-container");
    container.innerHTML = "";

    // Get all questions from questions.js
    const questionsArray = Object.entries(questions).map(
      ([question, data], index) => ({
        question,
        ...data,
        originalIndex: index, // Store original position
      })
    );

    // Get questions from Firebase
    const snapshot = await db.collection("questions").get();
    const firestoreQuestions = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      // Find matching question from questions.js to get original index
      const originalQuestion = questionsArray.find(
        (q) => q.question === data.question
      );
      firestoreQuestions.push({
        id: doc.id,
        ...data,
        originalIndex: originalQuestion
          ? originalQuestion.originalIndex
          : Number.MAX_SAFE_INTEGER,
      });
    });

    // Sort by original index
    firestoreQuestions.sort((a, b) => a.originalIndex - b.originalIndex);

    // Create cards in sorted order
    firestoreQuestions.forEach((data, index) => {
      const card = document.createElement("div");
      card.className = "col-12 col-md-6 col-lg-4";

      const formattedEnAnswer = boldBracketedText(data.en);
      const formattedMnAnswer = boldBracketedText(data.mn);

      const protectedIcon = data.isProtected
        ? '<i class="fas fa-lock text-warning ms-2" title="Protected Question"></i>'
        : "";

      card.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h5 class="card-title question selectable">
                ${index + 1}. ${data.question}
                ${protectedIcon}
              </h5>
              <div class="btn-group">
                <button class="btn btn-outline-secondary btn-sm" onclick="editQuestion('${
                  data.id
                }')" title="Edit">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-outline-danger btn-sm" onclick="deleteQuestion('${
                  data.id
                }')" title="Delete">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
            
            <div class="d-flex gap-2 mb-2 align-items-center">
              <button class="btn btn-speak btn-outline-primary" style="font-size: 1.5rem; padding: 0.5rem 1rem;" onclick="speakText(this, 'question')" title="Listen">
                <i class="fas fa-volume-up"></i>
              </button>
              <button class="btn btn-outline-primary" onclick="toggleAnswer(this)">
                Show Answer
              </button>
            </div>

            <div class="answer en-answer selectable" style="display: none;" data-lang="en">
              ${formattedEnAnswer}
              <button class="btn btn-speak btn-outline-primary" onclick="speakText(this, 'answer')" title="Listen">
                <i class="fas fa-volume-up"></i>
              </button>
            </div>
            <div class="answer mn-answer" style="display: none;" data-lang="mn">
              ${formattedMnAnswer}
            </div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    // Add double-click event listeners to all selectable elements
    addDoubleClickListeners();
  } catch (error) {
    console.error("Error creating cards:", error);
    throw error;
  }
}

// Edit question
async function editQuestion(docId) {
  try {
    const doc = await db.collection("questions").doc(docId).get();
    const data = doc.data();

    if (data.isProtected) {
      // Email шалгах modal нээх
      const email = prompt("Enter your email to edit protected questions:");

      if (!email || !AUTHORIZED_EMAILS.includes(email)) {
        alert("You don't have permission to edit this question!");
        return;
      }
    }

    // Modal-д одоогийн утгуудыг оруулах
    document.getElementById("editQuestionInput").value = data.question;
    document.getElementById("editEnInput").value = data.en;
    document.getElementById("editMnInput").value = data.mn;

    // Modal-ыг нээх
    const editModal = new bootstrap.Modal(
      document.getElementById("editQuestionModal")
    );
    editModal.show();

    // Save button handler
    const saveButton = document.querySelector(
      "#editQuestionModal .btn-primary"
    );
    saveButton.onclick = async () => {
      const newQuestion = document.getElementById("editQuestionInput").value;
      const newEnAnswer = document.getElementById("editEnInput").value;
      const newMnAnswer = document.getElementById("editMnInput").value;

      if (!newQuestion || !newEnAnswer || !newMnAnswer) {
        alert("Please fill all fields");
        return;
      }

      await db.collection("questions").doc(docId).update({
        question: newQuestion,
        en: newEnAnswer,
        mn: newMnAnswer,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      editModal.hide();
      alert("Question updated successfully!");
      createCards(); // Refresh the display
    };
  } catch (error) {
    console.error("Error editing question:", error);
    alert("Error editing question: " + error.message);
  }
}

// Delete question
async function deleteQuestion(docId) {
  try {
    const doc = await db.collection("questions").doc(docId).get();
    const data = doc.data();

    if (data.isProtected) {
      // Email шалгах modal нээх
      const email = prompt("Enter your email to delete protected questions:");

      if (!email || !AUTHORIZED_EMAILS.includes(email)) {
        alert("You don't have permission to delete this question!");
        return;
      }
    }

    if (confirm("Are you sure you want to delete this question?")) {
      await db.collection("questions").doc(docId).delete();
      alert("Question deleted successfully!");
      createCards();
    }
  } catch (error) {
    console.error("Error deleting question:", error);
    alert("Error deleting question: " + error.message);
  }
}

// Add new question
async function addNewQuestion() {
  try {
    const question = document.getElementById("newQuestionInput").value;
    const enAnswer = document.getElementById("newEnInput").value;
    const mnAnswer = document.getElementById("newMnInput").value;

    if (!question || !enAnswer || !mnAnswer) {
      alert("Please fill all fields");
      return;
    }

    await db.collection("questions").add({
      question: question,
      en: enAnswer,
      mn: mnAnswer,
      isProtected: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // Clear form and close modal
    document.getElementById("newQuestionInput").value = "";
    document.getElementById("newEnInput").value = "";
    document.getElementById("newMnInput").value = "";

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("addQuestionModal")
    );
    modal.hide();

    alert("Question added successfully!");
    createCards(); // Refresh the display
  } catch (error) {
    console.error("Error adding question:", error);
    alert("Error adding question: " + error.message);
  }
}

// Текст уншуулах функц
function speakText(button, type) {
  // ResponsiveVoice ажиллаж байгаа эсэхийг шалгах
  if (!window.responsiveVoice) {
    alert("Text to speech is not available!");
    return;
  }

  // Одоо тоглож байгаа дууг зогсоох
  responsiveVoice.cancel();

  // Товчлуурын анимэйшн
  button.classList.add("speaking");

  let textToSpeak = "";
  const card = button.closest(".card-body");

  if (type === "question") {
    // Асуултыг уншуулах
    textToSpeak = card
      .querySelector(".question")
      .textContent.replace(/\d+\.\s/, ""); // Дугаарыг хасах
  } else if (type === "answer") {
    // Хариултыг уншуулах
    textToSpeak = button.parentElement.textContent.trim();
  }

  // Текстийг цэвэрлэх
  textToSpeak = textToSpeak.replace(/[\n\r]+/g, " ").trim();

  // ResponsiveVoice ашиглан уншуулах
  responsiveVoice.speak(textToSpeak, "US English Male", {
    pitch: 1,
    rate: 0.9,
    volume: 1,
    onend: () => {
      // Дууссаны дараа анимэйшн зогсоох
      button.classList.remove("speaking");
    },
  });
}

// Дуу тоглуулалтыг зогсоох функц
function stopSpeaking() {
  responsiveVoice.cancel();
  document.querySelectorAll(".speaking").forEach((button) => {
    button.classList.remove("speaking");
  });
}

// Initialize voices when page loads
document.addEventListener("DOMContentLoaded", () => {
  window.speechSynthesis.getVoices();
});

// Add global function to stop speech
window.stopSpeech = () => {
  window.speechSynthesis.cancel();
  document.querySelectorAll(".speaking").forEach((btn) => {
    btn.classList.remove("speaking");
  });
};

// Add new function to handle CSV upload
async function uploadCSVData(file) {
  try {
    const reader = new FileReader();

    reader.onload = async (event) => {
      const csvData = event.target.result;
      // Split by newlines but handle both \r\n and \n
      const rows = csvData.split(/\r?\n/);

      // Skip header row and process each data row
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].trim();
        if (!row) continue; // Skip empty rows

        // Use regex to properly parse CSV, handling quoted fields
        const regex = /(?:^|,)("(?:[^"]*(?:""[^"]*)*)"|\d*\.?\d+|[^,]*)/g;
        const columns = [];
        let match;

        while ((match = regex.exec(row))) {
          let value = match[1] || match[0];
          // Remove leading comma if present
          if (value.startsWith(",")) value = value.slice(1);
          // Remove surrounding quotes and handle escaped quotes
          if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1).replace(/""/g, '"');
          }
          columns.push(value.trim());
        }

        // Ensure we have all three columns
        if (columns.length >= 3) {
          const question = columns[0];
          const enAnswer = columns[1];
          const mnAnswer = columns[2];

          console.log("Adding question:", { question, enAnswer, mnAnswer }); // Debug log

          // Add to Firebase only if all fields are present
          if (question && enAnswer && mnAnswer) {
            await db.collection("questions").add({
              question: question,
              en: enAnswer,
              mn: mnAnswer,
              isProtected: false,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
          }
        }
      }

      alert("CSV data uploaded successfully!");
      createCards(); // Refresh display
    };

    reader.readAsText(file, "UTF-8"); // Specify UTF-8 encoding
  } catch (error) {
    console.error("Error uploading CSV:", error);
    alert("Error uploading CSV: " + error.message);
  }
}

// Add function to handle file selection
function handleFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  const fileType = file.name.split(".").pop().toLowerCase();
  if (fileType !== "csv") {
    alert("Please upload a CSV file");
    return;
  }

  uploadCSVData(file);
}

export {
  initializeDatabase,
  createCards,
  editQuestion,
  deleteQuestion,
  addNewQuestion,
  handleFileSelect,
};
