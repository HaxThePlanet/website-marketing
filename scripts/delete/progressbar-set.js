jQuery(document).ready(function($) {
    "use strict";

    /* --progress bar
    -------------------------------------*/
    $(".progress-element").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx) {
                $(this).css("width", $(this).attr("aria-valuenow") + "%");
            });
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });
    });

});
