﻿require.config({
    baseUrl: '/DomainJS/',
    paths: {
        jquery: "lib/jquery-1.11.3.min",
        "AMUI": "lib/amazeui.2.7.1.min",
        "jquery.range": "lib/jquery.range",
        "es5": "lib/es5",
        "mapController": "mapController",
        "addToolbar": "addToolbar",
    },
    shim: {
        "addToolbar": {
            deps: ["jquery"]
        },
        "jquery.range": {
            deps: ["jquery"]
        }
    }
});

"use strict";

require(['domready!', 'jquery', 'AMUI', 'mapController', 'city', 'commuteGo'], function (doc, $, AMUI, mapController, city, commuteGo) {
    city.initAllCityInfo();
    mapController.init();

    $("input[name='locationType']").bind('click', mapController.locationMethodOnChange)

    $("input[name='vehicle']").bind('click', commuteGo.go)

    $('#Get58Data').bind('click', function(e) {
        e.preventDefault();
     
        mapController.Get58DataClick();
        e.stopPropagation();
    });

    if (!isMobile()) {
        $('#search-offcanvas').offCanvas({ effect: 'overlay' });
        $("#btnCloseTransfer").hide();
    } else {
        $("#btnWorkTransfer").hide();
        $("#divGradientList").hide();
        $("#btnCloseTransfer").show();
    }


    $("#btnCloseTransfer").on("click", function () {
        $("#transfer-panel").hide();
    });

    $(".amap-sug-result").css("z-index", 9999);
})


function isMobile() {
    try {
        if (document.getElementById("bdmark") != null) { return false; }
        var urlhash = window.location.hash;
        if (!urlhash.match("fromapp")) {
            if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad|Mobile)/i))) {
                return true;
            }
        }
    } catch (err) { }
    return false;
}
