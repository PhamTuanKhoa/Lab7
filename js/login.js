document.getElementById("submit-login").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var x = sessionStorage.setItem("username",username)
});

