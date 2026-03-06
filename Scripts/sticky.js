window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.innerWidth > 768) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            //logo
            document.getElementById("logo").style.width = "50px";
            document.getElementById("logo").style.marginLeft = "40px";

            //nav
            document.getElementsByTagName("nav")[0].style.fontSize = "14px";
            document.getElementsByTagName("nav")[0].style.marginLeft = "75px";

            //order now
            document.getElementById("orderNow").style.fontSize = "14px";
            document.getElementById("orderNow").style.padding = "5px 10px";


        } else {

            //logo
            document.getElementById("logo").style.width = "150px";
            document.getElementById("logo").style.padding = "0px";
        

            //nav
            document.getElementsByTagName("nav")[0].style.fontSize = "16px";
            document.getElementsByTagName("nav")[0].style.marginLeft = "0px";
            
            //order now
            document.getElementById("orderNow").style.fontSize = "16px";
            document.getElementById("orderNow").style.padding = "10px 20px";
        }
    }
}