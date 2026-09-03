# TypeSlack

## Example Usage

```typescript
import { TypeSlack } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: TypeSlack = {
  appId: "<id>",
  appName: "<value>",
  clientId: "<id>",
  clientSecret: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `appId`                                                    | *string*                                                   | :heavy_check_mark:                                         | Slack app ID.                                              |
| `appName`                                                  | *string*                                                   | :heavy_check_mark:                                         | Slack app display name.                                    |
| `clientId`                                                 | *string*                                                   | :heavy_check_mark:                                         | OAuth client ID assigned by Slack.                         |
| `clientSecret`                                             | *string*                                                   | :heavy_check_mark:                                         | Slack app OAuth client secret.                             |
| `slackTeam`                                                | [models.SlackTeam](../models/slackteam.md)                 | :heavy_minus_sign:                                         | Slack workspace metadata.                                  |
| `signingSecret`                                            | *string*                                                   | :heavy_minus_sign:                                         | Slack request signing secret.                              |
| `verificationToken`                                        | *string*                                                   | :heavy_minus_sign:                                         | Legacy Slack webhook verification token.                   |
| `botScopes`                                                | *string*[]                                                 | :heavy_minus_sign:                                         | OAuth scopes requested for Slack bot tokens.               |
| `userScopes`                                               | *string*[]                                                 | :heavy_minus_sign:                                         | OAuth scopes requested for Slack user tokens.              |
| `slashCommands`                                            | [models.SlashCommands](../models/slashcommands.md)[]       | :heavy_minus_sign:                                         | Slash commands configured for the managed Slack app.       |
| `shortcuts`                                                | [models.Shortcuts](../models/shortcuts.md)[]               | :heavy_minus_sign:                                         | Global and message shortcuts configured for the Slack app. |
| `extras`                                                   | Record<string, *any*>                                      | :heavy_minus_sign:                                         | Additional provider metadata stored with the connector.    |