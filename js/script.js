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
    $('#gugoDiv').hover(function() {
        $(this).find('#gugoLabel').removeClass("hiddenLabel");
        $(this).find('#gugoLabel').addClass("projectLabel");
    }, function () {
    	$(this).find('#gugoLabel').addClass("hiddenLabel");
        $(this).find('#gugoLabel').removeClass("projectLabel");
    });

    // hide and show photorganize
    $('#crPhotoDiv').hover(function() {
        $(this).find('#crLabel').removeClass("hiddenLabel");
        $(this).find('#crLabel').addClass("projectLabel");
    }, function () {
    	$(this).find('#crLabel').addClass("hiddenLabel");
        $(this).find('#crLabel').removeClass("projectLabel");
    });

    // hide and show photorganize
    $('#feedingSeattleDiv').hover(function() {
        $(this).find('#feedingLabel').removeClass("hiddenLabel");
        $(this).find('#feedingLabel').addClass("projectLabel");
    }, function () {
        $(this).find('#feedingLabel').addClass("hiddenLabel");
        $(this).find('#feedingLabel').removeClass("projectLabel");
    });

    // hide and show photorganize
    $('#cLinkDiv').hover(function() {
        $(this).find('#cLinkLabel').removeClass("hiddenLabel");
        $(this).find('#cLinkLabel').addClass("projectLabel");
    }, function () {
        $(this).find('#cLinkLabel').addClass("hiddenLabel");
        $(this).find('#cLinkLabel').removeClass("projectLabel");
    });

    // hide and show photorganize
    $('#photorganizeDiv').hover(function() {
        $(this).find('#photorganizeLabel').removeClass("hiddenLabel");
        $(this).find('#photorganizeLabel').addClass("projectLabel");
    }, function () {
        $(this).find('#photorganizeLabel').addClass("hiddenLabel");
        $(this).find('#photorganizeLabel').removeClass("projectLabel");
    });

    // hide and show photorganize
    $('#trueAmericanDiv').hover(function() {
        $(this).find('#trueAmericanLabel').removeClass("hiddenLabel");
        $(this).find('#trueAmericanLabel').addClass("projectLabel");
    }, function () {
        $(this).find('#trueAmericanLabel').addClass("hiddenLabel");
        $(this).find('#trueAmericanLabel').removeClass("projectLabel");
    });

    // hide and show photorganize
    $('#trueSeattleiteDiv').hover(function() {
        $(this).find('#seattleiteLabel').removeClass("hiddenLabel");
        $(this).find('#seattleiteLabel').addClass("projectLabel");
    }, function () {
        $(this).find('#seattleiteLabel').addClass("hiddenLabel");
        $(this).find('#seattleiteLabel').removeClass("projectLabel");
    });

});