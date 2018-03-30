/**
 * Dynamically loads the header for the current page.
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
 * Dynamically loads the navigation bar for the current page.
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
    }
}

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