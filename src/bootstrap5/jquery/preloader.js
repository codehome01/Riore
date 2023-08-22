 $(document).ready(function() {
     var preloaderFadeOutTime = 500;

     function hidePreloader() {
         $('.spinner-wrapper').fadeOut(preloaderFadeOutTime);
     }
     hidePreloader();
     //preloader ending....
 })