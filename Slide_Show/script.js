$(document).ready(function () {
  $(".next").click(function () {
    const currImg = $(".show");
    const next_img = currImg.next();
    if (next_img.length) {
      currImg.fadeOut("fast").removeClass("show");
      next_img.fadeIn("slow").addClass("show");
    }
  });

  $(".prev").click(function () {
    const currImg = $(".show");
    const prev_img = currImg.prev();
    if (prev_img.length) {
      currImg.fadeOut("fast").removeClass("show");
      prev_img.fadeIn().addClass("show");
    }
  });
});
