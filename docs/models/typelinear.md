# TypeLinear

## Example Usage

```typescript
import { TypeLinear } from "@vercel/sdk/models/createconnectorop.js";

let value: TypeLinear = {
  clientId: "<id>",
  clientSecret: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `appId`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `appName`                                                  | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `clientId`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `clientSecret`                                             | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `webhookSecret`                                            | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `appScopes`                                                | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `userScopes`                                               | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `ownerOrganization`                                        | [models.OwnerOrganization](../models/ownerorganization.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `application`                                              | [models.Application](../models/application.md)             | :heavy_minus_sign:                                         | N/A                                                        |
| `extras`                                                   | Record<string, *any*>                                      | :heavy_minus_sign:                                         | N/A                                                        |