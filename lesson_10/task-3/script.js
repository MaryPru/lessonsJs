$(document).ready(function() {
    if ($('#open_popup').length) {
        $( "#open_popup" ).click(function() {
            $.fancybox.open({
                src  : '#pop-up',
                type : 'inline',
                modal: true,
                smallBtn : true,
            });
        });
    }
});
