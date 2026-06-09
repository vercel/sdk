# TypeSlack

## Example Usage

```typescript
import { TypeSlack } from "@vercel/sdk/models/createconnectorop.js";

let value: TypeSlack = {
  appId: "<id>",
  appName: "<value>",
  clientId: "<id>",
  clientSecret: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `appId`                                    | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `appName`                                  | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `clientId`                                 | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `clientSecret`                             | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `slackTeam`                                | [models.SlackTeam](../models/slackteam.md) | :heavy_minus_sign:                         | N/A                                        |
| `signingSecret`                            | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `verificationToken`                        | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `botScopes`                                | *string*[]                                 | :heavy_minus_sign:                         | N/A                                        |
| `userScopes`                               | *string*[]                                 | :heavy_minus_sign:                         | N/A                                        |
| `extras`                                   | Record<string, *any*>                      | :heavy_minus_sign:                         | N/A                                        |