class SubCookieUtil {
  static get(name, subName) {
    let subCookies = SubCookieUtil.getAll(name);
    return subCookies ? subCookies[subName] : null;
  }
  static getAll(name) {
    let cookieName = encodeURIComponent(name) + "=",
      cookieStart = document.cookie.indexOf(name),
      cookieValue = null,
      cookieEnd,
      subCookies,
      parts,
      result = {};
    if (cookieStart > -1) {
      cookieEnd = document.cookie.indexOf(";", cookieStart);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = document.cookie.substring(
        cookieStart + cookieName.length,
        cookieEnd
      );
      if (cookieValue.length > 0) {
        subCookies = cookieValue.split("&");
        for (let i = 0, len = subCookies.length; i < len; i++) {
          parts = subCookies[i].split("=");
          result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
        }
        return result;
      }
    }
    return null;
  }
  static set(name, subName, value, expires, path, domain, secure) {
    let subCookies = SubCookieUtil.getAll(name) || {};
    subCookies[subName] = value;
    SubCookieUtil.setAll(name, subCookies, expires, path, domain, secure);
  }
  static setAll(name, subCookies, expires, path, domain, secure) {
    let cookieText = encodeURIComponent(name) + "=",
      subcookieParts = new Array(),
      subName;
    for (subName in subCookies) {
      if (subName.length > 0 && subCookies.hasOwnProperty(subName)) {
        subcookieParts.push(
          `${encodeURIComponent(subName)}=${encodeURIComponent(
            subCookies[subName]
          )}`
        );
      }
    }
    if (subcookieParts.length > 0) {
      cookieText += subcookieParts.join("&");
      if (expires instanceof Date) {
        cookieText += `; expires=${expires.toGMTString()}`;
      }
      if (path) {
        cookieText += `; path=${path}`;
      }
      if (domain) {
        cookieText += `; domain=${domain}`;
      }
      if (secure) {
        cookieText += `; secure`;
      }
    } else {
      cookieText += `; expires=${new Date(0).toGMTString()}`;
    }
    domain.cookie = cookieText;
  }
  static unset(name, subName, path, domain, secure) {
    let subCookies = SubCookieUtil.getAll(name);
    if (subCookies) {
      delete subCookies[subName];
      SubCookieUtil.setAll(name, subCookies, null, path, domain, secure);
    }
  }
  static unsetAll(name, path, domain, secure) {
    SubCookieUtil.setAll(name, null, new Date(0), path, domain, secure);
  }
}
