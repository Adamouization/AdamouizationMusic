/**
 * Loads the header for the current page.
 */
function loadHeader() {
    var fileName = getPageFilename();
    if (fileName.indexOf("index") !== -1) {
        $("#header").load("views/shared/header-home.html");
    } else {
        $("#header").load("../shared/header-pages.html");
    }
}

/**
 * Loads the navigation bar for the current page.
 */
function loadNavbar() {
    var div = document.getElementById("navbarResponsive"),
        filename = getPageFilename();
    if (filename.indexOf("index") !== -1) {
        div.innerHTML += "<ul class=\"navbar-nav mx-auto\">\n" +
            "                <li class=\"nav-item active px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"index.html\">Home\n" +
            "                        <span class=\"sr-only\">(current)</span>\n" +
            "                    </a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"views/pages/mixtapes.html\">Mixtapes</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"views/pages/mashups.html\">Mashups</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"views/pages/playlists.html\">Playlists</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"views/pages/about.html\">About</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"views/pages/contact.html\">Contact</a>\n" +
            "                </li>\n" +
            "            </ul>";
    } else if (filename.indexOf("mixtapes") !== -1) {
        div.innerHTML += "<ul class=\"navbar-nav mx-auto\">\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"../../index.html\">Home</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item active px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mixtapes.html\">Mixtapes\n" +
            "                        <span class=\"sr-only\">(current)</span>\n" +
            "                    </a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mashups.html\">Mashups</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"playlists.html\">Playlists</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"about.html\">About</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"contact.html\">Contact</a>\n" +
            "                </li>\n" +
            "            </ul>";
    } else if (filename.indexOf("mashups") !== -1) {
        div.innerHTML += "<ul class=\"navbar-nav mx-auto\">\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"../../index.html\">Home</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mixtapes.html\">Mixtapes</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item active px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mashups.html\">Mashups\n" +
            "                        <span class=\"sr-only\">(current)</span>\n" +
            "                    </a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"playlists.html\">Playlists</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"about.html\">About</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"contact.html\">Contact</a>\n" +
            "                </li>\n" +
            "            </ul>";
    } else if (filename.indexOf("playlists") !== -1) {
        div.innerHTML += "<ul class=\"navbar-nav mx-auto\">\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"../../index.html\">Home</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mixtapes.html\">Mixtapes</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mashups.html\">Mashups</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item active px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"playlists.html\">Playlists\n" +
            "                        <span class=\"sr-only\">(current)</span>\n" +
            "                    </a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"about.html\">About</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"contact.html\">Contact</a>\n" +
            "                </li>\n" +
            "            </ul>";
    } else if (filename.indexOf("about") !== -1) {
        div.innerHTML += "<ul class=\"navbar-nav mx-auto\">\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"../../index.html\">Home</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mixtapes.html\">Mixtapes</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mashups.html\">Mashups</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"playlists.html\">Playlists</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item active px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"about.html\">About\n" +
            "                        <span class=\"sr-only\">(current)</span>\n" +
            "                    </a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"contact.html\">Contact</a>\n" +
            "                </li>\n" +
            "            </ul>";
    } else if (filename.indexOf("contact") !== -1) {
        div.innerHTML += "<ul class=\"navbar-nav mx-auto\">\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"../../index.html\">Home</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mixtapes.html\">Mixtapes</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mashups.html\">Mashups</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"playlists.html\">Playlists</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"about.html\">About</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item active px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"contact.html\">Contact\n" +
            "                        <span class=\"sr-only\">(current)</span>\n" +
            "                    </a>\n" +
            "                </li>\n" +
            "            </ul>";
    } else if (filename.indexOf("terms") !== -1) {
        div.innerHTML += "<ul class=\"navbar-nav mx-auto\">\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"../../index.html\">Home</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mixtapes.html\">Mixtapes</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mashups.html\">Mashups</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"playlists.html\">Playlists</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"about.html\">About</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"contact.html\">Contact</a>\n" +
            "                </li>\n" +
            "            </ul>";
    } else if (filename.indexOf("credits") !== -1) {
        div.innerHTML += "<ul class=\"navbar-nav mx-auto\">\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"../../index.html\">Home</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mixtapes.html\">Mixtapes</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"mashups.html\">Mashups</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"playlists.html\">Playlists</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"about.html\">About</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item px-lg-4\">\n" +
            "                    <a class=\"nav-link text-uppercase text-expanded\" href=\"contact.html\">Contact</a>\n" +
            "                </li>\n" +
            "            </ul>";
    }
}

/**
 * Loads the footer for the current page.
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
 * Loads either the full web browser view or the mobile view for the content of the Home page.
 */
function loadHomePageContent() {
    if (isMobile()) {
        $("#home-page-contents").load("views/pages/page-contents/home-mobile.html");
    } else {
        $("#home-page-contents").load("views/pages/page-contents/home-full.html");
    }
}

/**
 * Loads either the full web browser view or the mobile view for the content of the Mixtapes page.
 */
function loadMixtapesPageContent() {
    if (isMobile()) {
        $("#mixtapes-page-contents").load("page-contents/mixtapes-mobile.html");
    } else {
        $("#mixtapes-page-contents").load("page-contents/mixtapes-full.html");
    }
}

/**
 * Loads either the full web browser view or the mobile view for the content of the Mashups page.
 */
function loadMashupsPageContent() {
    if (isMobile()) {
        $("#mashups-page-contents").load("page-contents/mashups-mobile.html");
    } else {
        $("#mashups-page-contents").load("page-contents/mashups-full.html");
    }
}

/**
 * Loads either the full web browser view or the mobile view for the content of the Playlists page.
 */
function loadPlaylistsPageContent() {
    if (isMobile()) {
        $("#playlist-page-contents").load("page-contents/playlists-mobile.html");
    } else {
        $("#playlist-page-contents").load("page-contents/playlists-full.html");
    }
}

/**
 * Loads either the full web browser view or the mobile view for the content of the About page.
 */
function loadAboutPageContent() {
    if (isMobile()) {
        $("#about-page-contents").load("page-contents/about-mobile.html");
    } else {
        $("#about-page-contents").load("page-contents/about-full.html");
    }
}

/**
 * Loads either the full web browser view or the mobile view for the content of the Contact page.
 */
function loadContactPageContent() {
    if (isMobile()) {
        $("#contact-page-contents").load("page-contents/contact-mobile.html");
    } else {
        $("#contact-page-contents").load("page-contents/contact-full.html");
    }
}

/**
 * Loads either the full web browser view or the mobile view for the content of the Terms page.
 */
function loadTermsPageContent() {
    if (isMobile()) {
        $("#terms-page-contents").load("page-contents/terms-mobile.html");
    } else {
        $("#terms-page-contents").load("page-contents/terms-full.html");
    }
}

/**
 * Loads either the full web browser view or the mobile view for the content of the Credits page.
 */
function loadCreditsPageContent() {
    if (isMobile()) {
        $("#credits-page-contents").load("page-contents/credits-mobile.html");
    } else {
        $("#credits-page-contents").load("page-contents/credits-full.html");
    }
}