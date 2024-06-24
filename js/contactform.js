jQuery(document).ready(function ($) {
    // var $root = $('html, body');

    $(".contact-form").submit(function (event) {
        // Stop form from submitting normally
        event.preventDefault();

        // Serialize submitting form and get action
        var $form = $(this),
            url = $form.attr("action");

        // Send the data using post
        var posting = $.post(url, $form.serialize());

        // Put the results in a div
        posting.done(function (data) {
            var response = $.parseJSON(data),
                target = $('#status-messages');

            // Add success/error classes
            if (response.status == 1) {
                target.removeClass('error');
                target.addClass('success');
            } else if (response.status == 0) {
                target.removeClass('success');
                target.addClass('error');
            }

            // Append message
            target.empty().append(response.message).hide().fadeIn(400);
        });
    });
});
