const shareButton = document.getElementById("share-icon");
const shareIcon = document.getElementById("img-share");
const popover = document.getElementById("popover");
shareButton.addEventListener("click", function (e) {
  console.log(e);
  popover.showPopover();
});

shareButton.addEventListener("mouseover", function (e) {
  // shareIcon.
});
