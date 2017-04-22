$("body").on('click','a', function() {
  // Make sure it is in the same window
  if($(this).attr("target") != "_blank") {

    // Change opacity of main to 0.2
    $("section").css("opacity","0.2");
    // Prevent the default event (redirect)
    event.preventDefault();
    // Get the href of the clicked link
    var href = $(this).attr("href");

    // Get the sourcecode of the href
    $.get(href, function(source) {
      // Get the main html from source
      var main = source.substring(source.indexOf('<body>') + 6, source.indexOf('</body>'));

      // Append this html to the main
      $("body").html(main);
      // Change URL to the href
      window.history.pushState(href, '', href);
      // Change opacity back to 1
      $("section").css("opacity","1");
    });
  }
});
