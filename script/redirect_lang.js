function get_browser_language() {
    var language = window.navigator.userLanguage || window.navigator.language;
    return language;
  }

  function redirect_to_language() {
    var language = get_browser_language();
    
    if (language.startsWith('nl')) {
      window.location.href = 'nl/'; 
    } else if (language.startsWith('en')) {
      window.location.href = 'en/';
    } else {
      window.location.href = 'nl/';
    }
  }

  window.onload = redirect_to_language;