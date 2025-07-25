# TeamLimitedConnection

Information for the SAML Single Sign-On configuration.

## Example Usage

```typescript
import { TeamLimitedConnection } from "@vercel/sdk/models/teamlimited.js";

let value: TeamLimitedConnection = {
  type: "OktaSAML",
  status: "linked",
  state: "active",
  connectedAt: 1611796915677,
  lastReceivedWebhookEvent: 1611796915677,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The Identity Provider "type", for example Okta.                                      | OktaSAML                                                                             |
| `status`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | Current status of the connection.                                                    | linked                                                                               |
| `state`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | Current state of the connection.                                                     | active                                                                               |
| `connectedAt`                                                                        | *number*                                                                             | :heavy_check_mark:                                                                   | Timestamp (in milliseconds) of when the configuration was connected.                 | 1611796915677                                                                        |
| `lastReceivedWebhookEvent`                                                           | *number*                                                                             | :heavy_minus_sign:                                                                   | Timestamp (in milliseconds) of when the last webhook event was received from WorkOS. | 1611796915677                                                                        |