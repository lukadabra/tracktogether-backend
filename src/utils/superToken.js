import supertokens from "supertokens-node/index.js";
import Session from "supertokens-node/recipe/session/index.js";
import ThirdParty from "supertokens-node/recipe/thirdparty/index.js";

import { providers } from "../config/authProviders.js";

supertokens.init({
    framework: "express",
    supertokens: {
        // These are the connection details of the app you created on supertokens.com
        connectionURI: "https://st-dev-f81b2550-6db9-11ee-84b3-711365a8366c.aws.supertokens.io",
        apiKey: "lbl8nHn9h2x7cfbpYPkFT6UscO",
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/session/appinfo
        appName: "track-together",
        apiDomain: "https://tracktogetherbackend-fbb1--5000--1f9496ab.local-credentialless.webcontainer.io",
        websiteDomain: "https://tracktogetherfrontend-oysd--5173--1f9496ab.local-credentialless.webcontainer.io",
    },
    recipeList: [
        ThirdParty.init({
            signInAndUpFeature: { providers }
        }),
        Session.init() // initializes session features
    ]
});

export default supertokens;