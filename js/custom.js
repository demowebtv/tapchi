  $(document).ready(function(){
    BrowserDetect.init();
     if (navigator.appVersion.indexOf("MSIE 8.") != -1
        || navigator.appVersion.indexOf("MSIE 9.") != -1
        || navigator.appVersion.indexOf("MSIE 10.") != -1
        || BrowserDetect.browser == "Explorer") {
            $('head').append('<link rel="stylesheet" href="css/ie.css"></link>');
    }
    $('#showmenu').click(function() {
        $('.head-menu').addClass('open');
        // $('.site-menu').addClass('hidden');
    });

    $('#closemenu').click(function(){
        $('.head-menu').removeClass('open');
        $('.opacity').addClass('hidden');
        // $('.site-menu').removeClass('hidden');
    });

    $('#showmenu').click(function() {
        $('.head-menu').addClass('open');
    });
    $('#showmenu').click(function() {
        $('.opacity').removeClass('hidden');
    });

    $('#toggle-search-mb').click(function() {
        $('.search-box').toggleClass('open');
        $('.opacity').toggleClass('hidden');
    });

    var stickyTop = $("#navbar").offset().top;
    var idMenu =  $("#navbar");
    if(window.outerWidth <= 1200)
    {
        idMenu =  $("#navbar-mb");
        stickyTop = idMenu.offset().top;
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() >=  stickyTop) {
            idMenu.addClass("sticky");
        } else {
            idMenu.removeClass('sticky');
        }
    });
    $("#news-slider").owlCarousel({
        autoPlay: false,
        autoplayTimeout: 5000,
        slideSpeed: 500,
        items: 1,
        navigation: true,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsMobile: [768, 1],
        navigationText: ["", ""]
    });
    $("#fc-slider").owlCarousel({
        autoPlay: false,
        autoplayTimeout: 5000,
        slideSpeed: 500,
        items: 3,
        navigation: true,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [992, 2],
        itemsMobile: [767, 1],
        navigationText: ["", ""]
    });
    $(window).bind('resize', function(e){
    window.resizeEvt;
    $(window).resize(function(){
        clearTimeout(window.resizeEvt);
        window.resizeEvt = setTimeout(function(){
          var topNew = $('#news-slider').height();
             if(topNew){
               $('#post').css({"maxHeight":topNew-40});
             }
        }, 250);
      });
    });
    var topNew = $('#news-slider').height();
       if(topNew){
         if(topNew<400) topNew = 400;
         $('#post').css({"maxHeight":topNew-40});
       }
});
var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "Other";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                this.versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) !== -1) {
                    return data[i].identity;
                }
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index === -1) {
                return;
            }

            var rv = dataString.indexOf("rv:");
            if (this.versionSearchString === "Trident" && rv !== -1) {
                return parseFloat(dataString.substring(rv + 3));
            } else {
                return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
            }
        },

        dataBrowser: [
            {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
            {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
            {string: navigator.userAgent, subString: "Opera", identity: "Opera"},
            {string: navigator.userAgent, subString: "OPR", identity: "Opera"},

            {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
            {string: navigator.userAgent, subString: "Safari", identity: "Safari"}
        ]
    };
