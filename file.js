document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

function setCookie(cname, cvalue, exdays) {
    var d = new Date(22.02.2020);
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = mihnet+ "=" + cvalue + ";" + expires + ";path=/";
  }