# PatchTeamRequest

## Example Usage

```typescript
import { PatchTeamRequest } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    description:
      "Our mission is to make cloud computing accessible to everyone",
    emailDomain: "example.com",
    name: "My Team",
    previewDeploymentSuffix: "example.dev",
    regenerateInviteCode: true,
    saml: {
      enforced: true,
    },
    slug: "my-team",
    enablePreviewFeedback: "on",
    enableProductionFeedback: "on",
    sensitiveEnvironmentVariablePolicy: "on",
    remoteCaching: {
      enabled: true,
    },
    hideIpAddresses: false,
    hideIpAddressesInLogDrains: false,
    defaultExpirationSettings: {
      expiration: "1y",
      expirationProduction: "1y",
      expirationCanceled: "1y",
      expirationErrored: "1y",
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `teamId`                                                         | *string*                                                         | :heavy_check_mark:                                               | The Team identifier to perform the request on behalf of.         | team_1a2b3c4d5e6f7g8h9i0j1k2l                                    |
| `slug`                                                           | *string*                                                         | :heavy_minus_sign:                                               | The Team slug to perform the request on behalf of.               | my-team-url-slug                                                 |
| `requestBody`                                                    | [models.PatchTeamRequestBody](../models/patchteamrequestbody.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |