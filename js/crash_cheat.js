var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = 'ηδΈθ§ζπ( γ€β’ΜΟβ’Μ)γ€ηδΈθ§ζπ( γ€β’ΜΟβ’Μ)γ€';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' ( ΰΉβ’Μγβ’Μ) β§θ’«εη°δΊο½';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });