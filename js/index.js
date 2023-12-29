    // Slide index
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    
    }

    

    // before login
    let username = sessionStorage.getItem("username");
    if(username){
        document.getElementById("username-login").innerHTML = '<i class="fa-solid fa-user"></i> ' + sessionStorage.getItem("username");
        document.getElementById("username-logout").innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> ' + "Đăng Xuất";
        document.getElementById("username-logout").href="logout.html"; 
    }

    


    



