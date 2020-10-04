function toggleButtonClick() {
    const nav = document.getElementById('nav');
    const closeIcon = document.getElementById('close');
    const openIcon = document.getElementById('open');
    const lightLogo = document.getElementById('light-logo');
    const darkLogo = document.getElementById('dark-logo');

    // opening the toggle
    if (!(nav.style.backgroundColor === "white")) {
        nav.style.backgroundColor = "white";

        closeIcon.style.display = "block";
        openIcon.style.display = "none";

        lightLogo.style.display = "none";
        darkLogo.style.display = "block";

    // closing the toggle
    } else {
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.15)";

        closeIcon.style.display = "none";
        openIcon.style.display = "block";
        
        lightLogo.style.display = "block";
        darkLogo.style.display = "none";

    }
}

//When user scrolls, add class on navbar
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

//Smooth scrolling with links
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top-50}, 700);
});