/**
 * Dynamically loads the footer for the current page.
 */
function loadFooter() {
    var fileName = getPageFilename();
    if (fileName.indexOf("index") !== -1) {
        $("#footer").load("views/shared/footer-home.html");
    } else {
        $("#footer").load("../shared/footer-pages.html");
    }
}