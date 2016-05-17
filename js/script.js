$(document).ready(function() {

    var wrap = $("#fullPage");

    wrap.on("scroll", function(e) {

      if (this.scrollTop > 147) {
        // wrap.addClass("fix-search");
        $("#scrollNav").show();
      } else {
        // wrap.removeClass("fix-search");
        $("scrollNav").hide();
      }
      
    });

    $('.parallax').parallax();
    $('.modal-trigger').leanModal();

    // hide and show True Seattleite Info
    $('#trueseattleite').hover(function() {
        $(this).find('#TSinfo').show();
    }, function () {
    	$(this).find('#TSinfo').hide();
    });

    // hide and show photorganize
    $('#photorganize').hover(function() {
        $(this).find('#POinfo').show();
    }, function () {
    	$(this).find('#POinfo').hide();
    });

    // hide and show CRP
    $('#croseman').hover(function() {
        $(this).find('#CRPinfo').show();
    }, function () {
    	$(this).find('#CRPinfo').hide();
    });

    // hide and show UTA
    $('#UTA').hover(function() {
        $(this).find('#UTAinfo').show();
    }, function () {
        $(this).find('#UTAinfo').hide();
    });

    // hide and show feeding seattle
    $('#feedingseattle').hover(function() {
        $(this).find('#FSinfo').show();
    }, function () {
        $(this).find('#FSinfo').hide();
    });

});