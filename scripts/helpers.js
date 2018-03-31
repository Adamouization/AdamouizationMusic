/**
 * Returns the name of the current page's file from the complete path.
 * @returns {string}
 */
function getPageFilename() {
    var pathSplit = location.pathname.split("/"),
        index = pathSplit.length - 1;
    return pathSplit[index];
}

/**
 * When the user clicks on <div>, open the popup
 */
function showPopup(popupId) {
    var key = "";
    switch (popupId) {
        case 'click-mixtape-1':
            key = 'mixtape-1';
            break;
        case 'click-mixtape-2':
            key = 'mixtape-2';
            break;
        case 'click-mixtape-3':
            key = 'mixtape-3';
            break;
        case 'click-mashup-1':
            key = 'mashup-1';
            break;
        case 'click-mashup-2':
            key = 'mashup-2';
            break;
        case 'click-mashup-3':
            key = 'mashup-3';
            break;
        case 'click-mashup-4':
            key = 'mashup-4';
            break;
        case 'click-mashup-5':
            key = 'mashup-5';
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