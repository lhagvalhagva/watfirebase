import { questions, protectedQuestions } from "./questions.js";

// Firebase холболт
const db = firebase.firestore();

// Тусгай эрхтэй admin-ы email
const SUPER_ADMIN_EMAIL = "your_email@gmail.com"; // Энд өөрийн email-г бичнэ

// Зөвшөөрөгдсөн email хаягууд
const AUTHORIZED_EMAILS = ["teacher", "Bagshxd", "bibna"]; // Энд зөвшөөрөгдсөн email-үүдээ бичнэ

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
              <h5 class="card-title question">
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
            <button class="btn btn-outline-primary mb-2" onclick="toggleAnswer(this)">
              Show Answer
            </button>
            <div class="answer en-answer" style="display: none;">
              ${formattedEnAnswer}
            </div>
            <div class="answer mn-answer" style="display: none;">
              ${formattedMnAnswer}
            </div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
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

export {
  initializeDatabase,
  createCards,
  editQuestion,
  deleteQuestion,
  addNewQuestion,
};
