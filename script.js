
$(document).ready(function() {
    $('#menu').click(function(){
        $(this).toggleClass('fa-times')
        $('header').toggleClass('toggle')
    })

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times')
        $('header').removeClass('toggle')

        if($(window).scrollTop() > 0){
            $('.top').show()
        }else{
            $('.top').hide()
        }
    })

    // smooth scrolling /////

    $('a[href*="#"]').on('click',function(e){
      e.preventDefault()

      $('html, body').animate({

        scrollTop : $($(this).attr('href')).offset().top,
      },
       500,
       'linear'
      )
    })
})


let typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function downloadCV() {
    // Yahan apne CV ka file path den
    var cvFilePath = './Modern CV2.pdf';

    // Ek anchor element create karen
    var link = document.createElement('a');

    // Anchor element ki properties set karen
    link.href = cvFilePath;
    link.download = 'Sami_Shaikh_CV.pdf'; // CV ka naam yahan set karen

    // Anchor element ko click karke download trigger karen
    document.body.appendChild(link);
    link.click();

    // Anchor element ko remove karen
    document.body.removeChild(link);

}


var isButtonClicked = false;

function handleButtonClick() {
    var button = document.querySelector('.custom-btn');

    if (isButtonClicked) {
        button.style.backgroundColor = 'black';
    } else {
        button.style.backgroundColor = 'yellow';
    }

    isButtonClicked = !isButtonClicked;
}

$(document).ready(function(){

    $('body').ripples({
        resolution: 512,
        dropRadius:10
    })
})

