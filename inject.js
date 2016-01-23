chrome.extension.sendRequest({
  method: "getUniPw"
}, function (response) {
  UNI = response.uni;
  PASS = response.pw;

  if (null != UNI && null != PASS) {
    if (location.href.indexOf("wind.columbia.edu/login?") != -1) {
      var uni = document.getElementsByClassName("loginbox")[0];
      var pass = document.getElementsByClassName("loginbox")[1];
      if (uni != null && pass != null) {
        uni.value = UNI;
        pass.value = PASS;
        document.forms[0].submit();
      }
    }

    // new courseworks
    if (location.href.indexOf("courseworks.columbia.edu/welcome/") != -1) {
      document.querySelector('.courseworks-login').click();
    }

    // old courseworks
    if (location.href.indexOf("courseworks.columbia.edu/cms/enter.cfm") != -1) {
      document.forms[0].wind_lg.click();
    }

    if (location.href.indexOf("courseworks.columbia.edu/welcome/") != -1) {
      location.href = document.getElementsByClassName("button")[0].href;
    }

    if ((location.href.indexOf("courseworks.columbia.edu/portal/relogin") != -1) ||
      (location.href.indexOf("courseworks.columbia.edu/portal/login") != -1)) {
      var uni = document.getElementById("eid");
      var pass = document.getElementById("pw");
      if (uni != null && pass != null) {
        uni.value = UNI;
        pass.value = PASS;
        if (location.href.indexOf("courseworks.columbia.edu/portal/relogin") != -1)
          document.forms[0].submit()
        else
          document.forms[0].submit.click()
      }
    }

    /* CAS */
    if (location.href.indexOf("cas.columbia.edu/cas/login") != -1) {
      var uni = document.getElementById("username");
      var pass = document.getElementById("password");
      if (uni != null && pass != null) {
        uni.value = UNI;
        pass.value = PASS;
        document.forms[0].submit.click()
      }
    }

    /* SSOL */
    if (location.href.indexOf("ssol.columbia.edu") != -1) {
      var uni = document.getElementsByName("u_id")[0];
      var pass = document.getElementsByName("u_pw")[0];
      if (pass != null) {
        if (uni != null)
          uni.value = UNI;
        pass.value = PASS;
        // The submit button is called submit, so we cannot call submit()
        document.forms[0].submit.click()
      }
    }
  }
});
