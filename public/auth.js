// Admin хэрэглэгчийн мэдээлэл
const ADMIN_EMAIL = "admin@wat.mn";
const ADMIN_PASSWORD = "adminWAT123!";

// Нэвтрэх функц
async function login(email, password) {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

// Хэрэглэгчийн төлөв өөрчлөгдөх
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Admin эрхтэй үед засах/устгах товчууд харагдана
    document
      .querySelectorAll(".admin-only")
      .forEach((el) => (el.style.display = "block"));
  } else {
    // Эрхгүй үед засах/устгах товчууд харагдахгүй
    document
      .querySelectorAll(".admin-only")
      .forEach((el) => (el.style.display = "none"));
  }
});
