const Keycloak = require("keycloak-verify").default
require("regenerator-runtime")

const config = {realm: 'entando', authServerUrl: 'http://my-keycloak'};
const keycloak = Keycloak(config);
const accessToken = "the access token"
keycloak.verifyOffline(accessToken).then(user=>{
    console.log(user)
}).catch(e=>console.log(e));
