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
                    $(".content-section-a-custom").animate({
                        right: "0px"
                    },500)
                }
            })
    }else if(screen.width > 500) {
            $(window).scroll(function(){
                if ($(document).scrollTop() > 100) {
                    $(".content-section-a-custom").animate({
                        right: "0px"
                    },500)
                }
            })
            }else {
                $(window).scroll(function(){
                    if ($(document).scrollTop() > 20) {
                        $(".content-section-a-custom").animate({
                            right: "0px"
                        },500)
                    }
                })
            }
    
}