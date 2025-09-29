// Language redirect (2025-safe)
// - Uses navigator.languages (with fallbacks) to detect preferred language
// - Respects ?lang=en|nl and persists preference in localStorage
// - Avoids redirect loops and uses location.replace to not pollute history
// - Runs from the site root only (not inside /en/ or /nl/)
(function () {
  function getPreferredLanguage() {
    // 1) Explicit override via query, e.g. /?lang=nl
    var qsLang = null;
    try {
      var m = (window.location.search || '').match(/[?&]lang=([a-zA-Z-]+)/);
      qsLang = m ? m[1].toLowerCase() : null;
    } catch (e) { /* ignore */ }
    if (qsLang) {
      if (qsLang.indexOf('nl') === 0) return 'nl';
      if (qsLang.indexOf('en') === 0) return 'en';
    }

    // 2) Stored preference
    try {
      var stored = window.localStorage ? localStorage.getItem('preferredLang') : null;
      if (stored === 'nl' || stored === 'en') return stored;
    } catch (e) { /* ignore storage errors */ }

    // 3) Browser preferences (modern first)
    var rawLangs = [];
    if (Array.isArray(navigator.languages) && navigator.languages.length) {
      rawLangs = navigator.languages;
    } else if (navigator.language) {
      rawLangs = [navigator.language];
    } else if (navigator.userLanguage) { // old IE
      rawLangs = [navigator.userLanguage];
    }
    var langs = rawLangs.map(function (l) { return (l || '').toLowerCase(); });
    var prefersNl = langs.some(function (l) { return l.indexOf('nl') === 0; });
    return prefersNl ? 'nl' : 'en';
  }

  function shouldRunHere() {
    var path = window.location.pathname || '/';
    // Avoid running inside language folders if this script is ever included there
    if (/\/(en|nl)\/?/i.test(path)) return false;
    // Allow manual opt-out via query: /?noredirect=1
    if (/[?&]noredirect=1/i.test(window.location.search || '')) return false;
    return true;
  }

  function redirectToLanguage() {
    if (!shouldRunHere()) return;
    var lang = getPreferredLanguage();
    // Persist explicit query choice for future visits
    if (/[?&]lang=/i.test(window.location.search || '')) {
      try { localStorage.setItem('preferredLang', lang); } catch (e) { /* ignore */ }
    }
    var target = (lang === 'nl') ? 'nl/' : 'en/';
    // Replace to avoid leaving a useless entry in back/forward history
    window.location.replace(target);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', redirectToLanguage);
  } else {
    redirectToLanguage();
  }
})();