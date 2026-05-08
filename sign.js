function showSignIn() {
    document.getElementById("signInForm").style.display = "flex";
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("signInBtn").classList.add("active");
    document.getElementById("signUpBtn").classList.remove("active");
  }
  
  function showSignUp() {
    document.getElementById("signInForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "flex";
    document.getElementById("signInBtn").classList.remove("active");
    document.getElementById("signUpBtn").classList.add("active");
  }
  