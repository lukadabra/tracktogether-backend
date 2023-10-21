export const providers = [
    {
        config: {
            thirdPartyId: "Deezer",
            name: "Deezer",
            clients: [{
                clientId: "...",
                clientSecret: "...",
                scope: ["profile", "email"]
            }],
            authorizationEndpoint: "https://example.com/oauth/authorize",
            authorizationEndpointQueryParams: {
                "someKey1": "value1",
                "someKey2": null
            },
            tokenEndpoint: "https://example.com/oauth/token",
            tokenEndpointBodyParams: {
                "someKey1": "value1",
            },
            userInfoEndpoint: "https://example.com/oauth/userinfo",
            userInfoMap: {
                fromUserInfoAPI: {
                    userId: "id",
                    email: "email",
                    emailVerified: "email_verified",
                }
            }
        }
    },
    {
        config: {
            thirdPartyId: "Spotify",
            name: "Spotify",
            clients: [{
                clientId: "...",
                clientSecret: "...",
                scope: ["profile", "email"]
            }],
            authorizationEndpoint: "https://example.com/oauth/authorize",
            authorizationEndpointQueryParams: {
                "someKey1": "value1",
                "someKey2": null
            },
            tokenEndpoint: "https://example.com/oauth/token",
            tokenEndpointBodyParams: {
                "someKey1": "value1",
            },
            userInfoEndpoint: "https://example.com/oauth/userinfo",
            userInfoMap: {
                fromUserInfoAPI: {
                    userId: "id",
                    email: "email",
                    emailVerified: "email_verified",
                }
            }
        }
    }
]