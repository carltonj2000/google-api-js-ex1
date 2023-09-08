/** @type {import("googleapis").google} */
var gapi;
var DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];
/** @type {string} */
var SCOPES = "https://www.googleapis.com/auth/drive";
var signinBtn = document.getElementById("signin");
var signoutBtn = document.getElementById("signout");

window.onload = handleClientLoad;
function handleClientLoad() {
  gapi.load("client", initClient);
}
function initClient() {
  gapi.client
    .init({
      apiKey: auth.api_key,
      client_id: auth.web.client_id,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(
      function () {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        if (signinBtn) signinBtn.onclick = handleSignin;
        else console.error("Signin Button Reference Null");
        if (signoutBtn) signoutBtn.onclick = handleSignOut;
        else console.error("SignOut Button Reference Null");
      },
      function (error) {
        console.error(error);
      }
    );
}

/**
 *
 * @param {string} isSignedIn - Person is signed in
 */
function updateSigninStatus(isSignedIn) {
  if (signinBtn) {
    if (isSignedIn) {
      signinBtn.style.display = "none";
      signinBtn.style.display = "block";
    } else {
      signinBtn.style.display = "block";
      signinBtn.style.display = "none";
    }
  } else console.error("Signin Button Reference Null Error 2");
}

function handleSignin() {
  gapi.auth2.getAuthInstance().signIn();
}
