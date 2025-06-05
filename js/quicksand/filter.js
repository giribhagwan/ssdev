
$(document).ready(function () {
  $(".filter-button").click(function (e) {
    e.preventDefault();
    var value = $(this).attr('data-filter');

    $(".filter-button").removeClass("active");
    $(this).addClass("active");

    if (value == "all") {
      $(".item-thumbs").fadeIn();
    } else {
      $(".item-thumbs").hide();
      $('.item-thumbs[data-type="' + value + '"]').fadeIn();
    }
  });
});
