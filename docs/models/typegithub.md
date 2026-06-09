# TypeGithub

## Example Usage

```typescript
import { TypeGithub } from "@vercel/sdk/models/createconnectorop.js";

let value: TypeGithub = {
  appId: 937403,
  appSlug: "<value>",
  appName: "<value>",
  clientId: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `appId`                            | *number*                           | :heavy_check_mark:                 | N/A                                |
| `appSlug`                          | *string*                           | :heavy_check_mark:                 | N/A                                |
| `appName`                          | *string*                           | :heavy_check_mark:                 | N/A                                |
| `clientId`                         | *string*                           | :heavy_check_mark:                 | N/A                                |
| `owner`                            | [models.Owner](../models/owner.md) | :heavy_minus_sign:                 | N/A                                |
| `clientSecret`                     | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `privateKeyPem`                    | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `webhookSecret`                    | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `extras`                           | Record<string, *any*>              | :heavy_minus_sign:                 | N/A                                |