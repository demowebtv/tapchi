$(document).ready(function(){

  var mydate = new Date('2014-04-03');
  console.log(mydate.toDateString());
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
      autoPlay: true,
      autoplayTimeout: 5000,
      slideSpeed: 500,
      autoHeight: false,
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
             $('.homeads').css({"height":topNew});
           }
           var media = $('.multi-media').outerHeight();
           $('#scrollbar').css({"maxHeight":media});
           ssb.refresh();
      }, 350);
    });
  });
  var topNew = $('#news-slider').height();
     if(topNew){
       if(topNew>500){
         $('#post').css({"maxHeight":topNew-40});
         $('.homeads').css({"height":topNew});
        }
       var media = $('.multi-media').outerHeight();
       $('#scrollbar').css({"maxHeight":media});
     }
     function carouselNormalization() {

      window.heights = [], //create empty array to store height values
      window.tallest; //create variable to make note of the tallest slide

      function normalizeHeights() {
          jQuery('.ni-content').each(function() { //add heights to array
              window.heights.push(jQuery(this).outerHeight());
          });
          window.tallest = Math.max.apply(null, window.heights); //cache largest value
          jQuery('.ni-content').each(function() {
              jQuery(this).css('min-height',tallest + 'px');
          });
      }
      normalizeHeights();

      jQuery(window).on('resize orientationchange', function () {

          window.tallest = 0, window.heights.length = 0; //reset vars
          jQuery('.ni-content').each(function() {
              jQuery(this).css('min-height','0'); //reset min-height
          });

          normalizeHeights(); //run it again

      });

  }

  jQuery( document ).ready(function() {
      carouselNormalization();
  });

$('.time-now').html(function(){
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Chủ nhật";
  weekday[1] = "Thứ hai";
  weekday[2] = "Thứ ba";
  weekday[3] = "Thứ tư";
  weekday[4] = "Thứ năm";
  weekday[5] = "Thứ sáu";
  weekday[6] = "Thứ bảy";

  var n = weekday[d.getDay()];
  var date = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
  var dateTime = n+', '+date;
  return dateTime;
});
// replace date
$('.date').each(function() {
 var text = $(this).html();
  var mapObj = {
     Mon:"Thứ hai",
     Tue:"Thứ ba",
     Wed:"Thứ tư",
     Thu:"Thứ năm",
     Fri:"Thứ sáu",
     Sat:"Thứ bảy",
     Sun:"Chủ nhật"
  };
text = text.replace(/Mon|Tue|Wed|Thu|Fri|Sat|Sun/gi, function(matched){
  return mapObj[matched];
});
$(this).html(text);
});
//begin ads right auto scroll;
function sticktothetop() {
      var window_top = $(window).scrollTop();
      var top = $('#stick-here').offset().top;
      if (window_top >= $('#stick-here').offset().top + $('#stick-here').
          outerHeight() - window.innerHeight) {
          $('#stickThis').addClass('stick');
           $('#stick-here').height($('#stickThis').outerHeight());
      }else {
          $('#stickThis').removeClass('stick');
           $('#stick-here').height(0);
      }
      var cate = $('.category-slider').outerHeight();
      if(window_top > $('footer').offset().top - window.innerHeight-120-cate){
            var measure = $('footer'),
        windowHeight = $(window).height(),
        scrollDistance = $(window).scrollTop(),
        divOffsetTop = measure.offset().top;
        if(cate >0){
        var delta = Math.abs(divOffsetTop - (scrollDistance + windowHeight  + cate + 150));
        }
        else{
        var delta = Math.abs(divOffsetTop - (scrollDistance + windowHeight + 120));
        }
        document.getElementById("stickThis").style.bottom =delta+"px";
      }else{
        document.getElementById("stickThis").style.bottom = "0";
      }
  }
  $(function() {
      if($('.content-home .col-lg-9').innerHeight() - $('.content-home .col-lg-3 .ads-mod').innerHeight()>200){
      $(window).scroll(sticktothetop);
      sticktothetop();
    }
  });
});
//end ads right auto scroll;
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
