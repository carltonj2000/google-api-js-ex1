/** @type {import("googleapis").google} */
var gapi;
var DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];
/** @type {string} */
var SCOPES = "https://www.googleapis.com/auth/drive";
var signinBtn = document.getElementById("signin");
var signoutBtn = document.getElementById("signout");
function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}
function initClient() {
  gapi.client
    .init({
      apiKey: auth.api_key,
      clientid: auth.web.client_id,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(function () {});
}
