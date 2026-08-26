# TypeLinear

## Example Usage

```typescript
import { TypeLinear } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: TypeLinear = {
  clientId: "<id>",
  clientSecret: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `appId`                                                    | *string*                                                   | :heavy_minus_sign:                                         | Linear application ID.                                     |
| `appName`                                                  | *string*                                                   | :heavy_minus_sign:                                         | Linear application name.                                   |
| `clientId`                                                 | *string*                                                   | :heavy_check_mark:                                         | OAuth client ID assigned by Linear.                        |
| `clientSecret`                                             | *string*                                                   | :heavy_check_mark:                                         | Linear OAuth client secret.                                |
| `webhookSecret`                                            | *string*                                                   | :heavy_minus_sign:                                         | Linear webhook verification secret.                        |
| `appScopes`                                                | *string*[]                                                 | :heavy_minus_sign:                                         | OAuth scopes requested for Linear application tokens.      |
| `userScopes`                                               | *string*[]                                                 | :heavy_minus_sign:                                         | OAuth scopes requested for Linear user tokens.             |
| `ownerOrganization`                                        | [models.OwnerOrganization](../models/ownerorganization.md) | :heavy_minus_sign:                                         | Linear organization that owns the OAuth application.       |
| `application`                                              | [models.Application](../models/application.md)             | :heavy_minus_sign:                                         | Linear OAuth application metadata.                         |
| `extras`                                                   | Record<string, *any*>                                      | :heavy_minus_sign:                                         | Additional provider metadata stored with the connector.    |