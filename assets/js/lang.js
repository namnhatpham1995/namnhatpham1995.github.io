/*
 * i18n runtime for the single-file portfolio.
 *
 * Content is keyed in index.html with data-i18n="<key>" (and data-i18n-html
 * for values that contain markup). German/Vietnamese strings live in
 * translations.js (window.I18N). English is captured from the original DOM on
 * load, so the raw HTML stays the source of truth and the no-JS fallback.
 */
(function () {
	"use strict";

	var SUPPORTED = ["en", "de", "vn"];
	var STORAGE_KEY = "portfolio.lang";
	var HTML_LANG = { en: "en", de: "de", vn: "vi" }; // <html lang> codes

	var I18N = window.I18N || {};
	// English baseline, captured from the document.
	var EN = {};

	function normalize(code) {
		if (!code) return null;
		code = String(code).toLowerCase();
		if (code === "vi") code = "vn"; // accept the ISO code as an alias
		return SUPPORTED.indexOf(code) !== -1 ? code : null;
	}

	function captureEnglish(nodes) {
		nodes.forEach(function (el) {
			var key = el.getAttribute("data-i18n");
			if (key in EN) return; // first occurrence wins
			EN[key] = el.hasAttribute("data-i18n-html") ? el.innerHTML : el.textContent;
		});
		I18N.en = EN;
	}

	function valueFor(lang, key) {
		var dict = lang === "en" ? EN : I18N[lang];
		if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
		console.warn("[i18n] missing key '" + key + "' for language '" + lang + "', falling back to English.");
		return EN[key];
	}

	function applyLanguage(lang, nodes) {
		nodes.forEach(function (el) {
			var key = el.getAttribute("data-i18n");
			var val = valueFor(lang, key);
			if (val == null) return;
			if (el.hasAttribute("data-i18n-html")) {
				el.innerHTML = val;
			} else {
				el.textContent = val;
			}
		});
		document.documentElement.setAttribute("lang", HTML_LANG[lang] || "en");
		markActive(lang);
	}

	function markActive(lang) {
		var links = document.querySelectorAll(".langChange [data-lang]");
		Array.prototype.forEach.call(links, function (a) {
			a.classList.toggle("active", a.getAttribute("data-lang") === lang);
		});
	}

	function resolveInitial() {
		// 1) URL ?lang=
		var params = new URLSearchParams(window.location.search);
		var fromUrl = normalize(params.get("lang"));
		if (fromUrl) return fromUrl;

		// 2) saved choice
		try {
			var saved = normalize(window.localStorage.getItem(STORAGE_KEY));
			if (saved) return saved;
		} catch (e) { /* storage unavailable */ }

		// 3) browser language (only if German or Vietnamese)
		var prefs = navigator.languages || [navigator.language || ""];
		for (var i = 0; i < prefs.length; i++) {
			var p = (prefs[i] || "").toLowerCase();
			if (p.indexOf("de") === 0) return "de";
			if (p.indexOf("vi") === 0) return "vn";
		}

		// 4) default
		return "en";
	}

	function updateUrl(lang) {
		try {
			var url = new URL(window.location.href);
			url.searchParams.set("lang", lang);
			window.history.replaceState(null, "", url);
		} catch (e) { /* older browser: skip URL sync */ }
	}

	function persist(lang) {
		try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
	}

	function init() {
		var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
		captureEnglish(nodes);

		var lang = resolveInitial();
		applyLanguage(lang, nodes);
		updateUrl(lang);

		// Wire the footer switcher.
		var links = document.querySelectorAll(".langChange [data-lang]");
		Array.prototype.forEach.call(links, function (a) {
			a.addEventListener("click", function (e) {
				e.preventDefault();
				var chosen = normalize(a.getAttribute("data-lang"));
				if (!chosen) return;
				applyLanguage(chosen, nodes);
				persist(chosen);
				updateUrl(chosen);
			});
		});
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
