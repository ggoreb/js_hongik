function getClient() {
  const userAgent = navigator.userAgent;
  console.log(userAgent);

  let os = '';

  if(userAgent.indexOf('Android') > -1) {
    os = 'AndroidPhone';
  } else if(userAgent.indexOf('iPhone') > -1) {
    os = 'iPhone';
  } else if(userAgent.indexOf('iPad') > -1) {
    os = 'iPad';
  } else if(userAgent.indexOf('Chrome') > -1) {
    os = 'Chrome';
  } else {
    os = 'ETC'
  }

  return os;
}