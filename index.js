$('#navbar-toggler').click(() => {
    const nav = $('#nav');
    const closeIcon = $('#close');
    const openIcon = $('#open');
    const lightLogo = $('#light-logo');
    const darkLogo = $('#dark-logo');

    if ((nav.css('background-color')) !== 'rgb(255, 255, 255)') {
        console.log('Im here')
        nav.css('background-color', 'rgb(255, 255, 255)');
        closeIcon.css('display', 'block');
        openIcon.css('display', 'none');
        lightLogo.css('display', 'none');
        darkLogo.css('display', 'block');
    } else {
        nav.css('background-color', 'rgba(255, 255, 255, 0.15)');
        closeIcon.css('display', 'none');
        openIcon.css('display', 'block');
        lightLogo.css('display', 'block');
        darkLogo.css('display', 'none');
    }
})

//When user scrolls, add class on navbar
$(function () {
    $(document).scroll(function () {
        const $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

//Smooth scrolling with links
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top-50}, 700);
});