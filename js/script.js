$(document).ready(function() {

    stickyHeader();


function stickyHeader() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var shrink = 75;

        if (distanceY > shrink) {
           $("#topNav").fadeOut(200);
           $("#scrollNav").removeClass("hiddenClass");
           $("#scrollNav").fadeIn(200);
        } else {
           $("#topNav").fadeIn(200);
           $("#scrollNav").addClass("hiddenClass");
           $("#scrollNav").fadeOut(200);
        }
    });
}

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