function registerUser() {
  const name = document.getElementById("regName").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("regConfirmPassword").value;
  
  if (!name || !phone || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }
  
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
  
  const user = {
    name: name,
    phone: phone,
    email: email,
    password: password
  };
  
  localStorage.setItem("nexvoraUser", JSON.stringify(user));
  
  alert("Registration successful!");
  
  showLogin();
}


function loginUser() {
  const emailPhone = document.getElementById("loginEmailPhone").value.trim();
  const password = document.getElementById("loginPassword").value;
  
  const savedUser = JSON.parse(
    localStorage.getItem("nexvoraUser")
  );
  
  if (!savedUser) {
    alert("No account found. Please create an account first.");
    return;
  }
  
  if (
    (emailPhone === savedUser.email ||
      emailPhone === savedUser.phone) &&
    password === savedUser.password
  ) {
    localStorage.setItem("nexvoraLoggedIn", "true");
    
    alert("Login successful!");
    
    window.location.href = "index.html";
  } else {
    alert("Incorrect email/phone or password.");
  }
}