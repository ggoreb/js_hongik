function getCookie(name) {
  const cookie = document.cookie;
  
  let startIdx = cookie.indexOf(name);
  if(startIdx == -1) return;

  let endIdx = cookie.indexOf(';', startIdx);
  if(endIdx == -1) endIdx = cookie.length;
  
  return cookie.substring(startIdx + name.length + 1, endIdx);
}

function removeCookie(name) {
  const expire = new Date(1970, 0, 1);
  document.cookie = `${name}=1;expires=${expire.toGMTString()}`
}

function setCookie(name, value, minute) {
  const expire = new Date();
  expire.setMinutes(expire.getMinutes() + minute);
  document.cookie = `${name}=${value};expires=${expire.toGMTString()}`
}
