/*
 * Section window backdrops (Option B).
 *
 * When a section panel is open, set the full-window background (#bg:after, via
 * the --section-bg CSS variable in lang.css) to that section's image. Intro and
 * the home/closed state fall back to the theme default by clearing the variable.
 *
 * Driven by location.hash, which is how the Dimension theme already toggles
 * panel visibility, so we stay in sync without patching main.js. Progressive
 * enhancement: with JS off, the default background is used and content is intact.
 */
(function () {
	"use strict";

	// Section id -> backdrop image. Intro is intentionally absent (keeps default).
	var BACKDROPS = {
		skills: "images/skills.jpg",
		experience: "images/experience.jpg",
		education: "images/education.jpg",
		projects: "images/projects.jpg",
		certificates: "images/certificates.jpg",
		languages: "images/languages.jpg",
		hobbies: "images/hobbies.JPG"
	};

	var root = document.documentElement;

	function currentId() {
		var hash = (window.location.hash || "").replace(/^#/, "");
		return hash;
	}

	function update() {
		var id = currentId();
		var img = BACKDROPS[id];
		if (img) {
			// Resolve to an absolute URL against the document so the value works
			// regardless of which stylesheet consumes the variable. A relative
			// url() inside lang.css would otherwise resolve against assets/css/.
			var abs = new URL(img, document.baseURI).href;
			root.style.setProperty("--section-bg", 'url("' + abs + '")');
		} else {
			// intro, empty hash, or unknown id -> default background
			root.style.removeProperty("--section-bg");
		}
	}

	window.addEventListener("hashchange", update);
	window.addEventListener("popstate", update);

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", update);
	} else {
		update();
	}
})();
