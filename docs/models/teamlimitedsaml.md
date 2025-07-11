# TeamLimitedSaml

When "Single Sign-On (SAML)" is configured, this object contains information that allows the client-side to identify whether or not this Team has SAML enforced.

## Example Usage

```typescript
import { TeamLimitedSaml } from "@vercel/sdk/models/teamlimited.js";

let value: TeamLimitedSaml = {
  connection: {
    type: "OktaSAML",
    status: "linked",
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
| `connection`                                                                                                                                                    | [models.TeamLimitedConnection](../models/teamlimitedconnection.md)                                                                                              | :heavy_minus_sign:                                                                                                                                              | Information for the SAML Single Sign-On configuration.                                                                                                          |
| `directory`                                                                                                                                                     | [models.TeamLimitedDirectory](../models/teamlimiteddirectory.md)                                                                                                | :heavy_minus_sign:                                                                                                                                              | Information for the Directory Sync configuration.                                                                                                               |
| `enforced`                                                                                                                                                      | *boolean*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                              | When `true`, interactions with the Team **must** be done with an authentication token that has been authenticated with the Team's SAML Single Sign-On provider. |