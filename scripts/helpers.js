/**
 * Returns the name of the current page's file from the complete path.
 * @returns {string}
 */
function getPageFilename() {
    var pathSplit = location.pathname.split("/");
    var index = pathSplit.length - 1;
    return pathSplit[index];
}