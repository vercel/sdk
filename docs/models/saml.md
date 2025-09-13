# Saml

When "Single Sign-On (SAML)" is configured, this object contains information regarding the configuration of the Identity Provider (IdP).

## Example Usage

```typescript
import { Saml } from "@vercel/sdk/models/team.js";

let value: Saml = {
  connection: {
    status: "linked",
    type: "OktaSAML",
    state: "active",
    connectedAt: 1611796915677,
    lastReceivedWebhookEvent: 1611796915677,
  },
  directory: {
    type: "OktaSAML",
    state: "active",
    connectedAt: 1611796915677,
    lastReceivedWebhookEvent: 1611796915677,
  },
  enforced: false,
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connection`                                                                                                                                                    | [models.Connection](../models/connection.md)                                                                                                                    | :heavy_minus_sign:                                                                                                                                              | Information for the SAML Single Sign-On configuration.                                                                                                          |
| `directory`                                                                                                                                                     | [models.Directory](../models/directory.md)                                                                                                                      | :heavy_minus_sign:                                                                                                                                              | Information for the Directory Sync configuration.                                                                                                               |
| `enforced`                                                                                                                                                      | *boolean*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                              | When `true`, interactions with the Team **must** be done with an authentication token that has been authenticated with the Team's SAML Single Sign-On provider. |
| `defaultRedirectUri`                                                                                                                                            | [models.DefaultRedirectUri](../models/defaultredirecturi.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                              | The default redirect URI to use after successful SAML authentication.                                                                                           |
| `roles`                                                                                                                                                         | Record<string, *models.Roles*>                                                                                                                                  | :heavy_minus_sign:                                                                                                                                              | When "Directory Sync" is configured, this object contains a mapping of which Directory Group (by ID) should be assigned to which Vercel Team "role".            |