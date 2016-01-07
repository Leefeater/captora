//Button to initiate page transition
    function customize() {
//Deletes template page
        $(".template").css("display", "none");
        showNav();
    }
    //Displays navigation and heading.  Also removes the class that hides the rest of the page.
    function showNav() {
        $(".topnav-c").animate({
            position: "fixed",
            top: 0
        },500 ,
            showHeading()
        )
        $(".hidden").removeClass("hidden")
        imgPopins()
    }
    function showHeading() {
        $("#twoC").fadeIn(2000)
    }
    //Scrolling Pop ins
    function imgPopins() {
        //if else statments used to determin screen width
    if(screen.width > 1000) { 
        //sets up function to have image scroll in
            $(window).scroll(function(){
                if ($(document).scrollTop() > 300) {
                    var $contentSection = $(".content-section-a-custom")
                    $contentSection.css("display", "block");
                    $contentSection.animate({
                        right: "0px"
                    },500)
                }
            })
    }else if(screen.width > 500) {
            $(window).scroll(function(){
                if ($(document).scrollTop() > 100) {
                    var $contentSection = $(".content-section-a-custom")
                    $contentSection.css("display", "block");
                    $contentSection.animate({
                        right: "0px"
                    },500)
                }
            })
            }
    
}