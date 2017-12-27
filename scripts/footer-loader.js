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

/**
 * Returns the name of the current page's file from the complete path.
 * @returns {string}
 */
function getPageFilename() {
    var pathSplit = location.pathname.split("/");
    var index = pathSplit.length - 1;
    return pathSplit[index];
}