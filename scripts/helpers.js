/**
 * Returns the name of the current page's file from the complete path.
 * @returns {string}
 */
function getPageFilename() {
    var pathSplit = location.pathname.split("/");
    var index = pathSplit.length - 1;
    return pathSplit[index];
}

/**
 * When the user clicks on <div>, open the popup
 */
function showPopup(popupId) {
    var key = "";
    switch (popupId) {
        case 'mixtape1button':
            key = 'mixtape1';
            break;
        case 'mixtape2button':
            key = 'mixtape2';
            break;
        case 'mixtape3button':
            key = 'mixtape3';
            break;
        default:
            key = "empty";
    }
    if (key !== 'empty') {
        var popup = document.getElementById(key);
        popup.classList.toggle("show");
    } else {
        // todo - add an error message
    }
}