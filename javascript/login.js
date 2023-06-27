document.getElementById("signup-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("login-container").style.display = "none";
    document.getElementById("signup-container").style.display = "block";
  });

  document.getElementById("login-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
  });

  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Lakukan validasi login di sini, misalnya dengan AJAX atau JavaScript lainnya

    // Contoh validasi sederhana
    if (username === "admin" && password === "password") {
      alert("Login berhasil!");
      // Redirect ke halaman lain
      window.location.href = "dashboard.html";
    } else {
      alert("Username atau password salah!");
    }
  });

  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("signup-username").value;
    var password = document.getElementById("signup-password").value;

    // Lakukan proses pendaftaran di sini

    alert("Pendaftaran berhasil!");

    // Reset form pendaftaran
    document.getElementById("signup-username").value = "";
    document.getElementById("signup-password").value = "";
  });