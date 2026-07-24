# Tokens

## Example Usage

```typescript
import { Tokens } from "@vercel/sdk/models/importconnectortokensop.js";

let value: Tokens = {
  accessToken: "<value>",
  expiresAt: 6708.74,
  subject: {
    type: "user",
    id: "<id>",
  },
  environment: "preview",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accessToken`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `expiresAt`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `refreshToken`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `refreshTokenExpiresAt`                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `subject`                                                                   | *models.Subject*                                                            | :heavy_check_mark:                                                          | N/A                                                                         |
| `environment`                                                               | *models.ImportConnectorTokensEnvironmentTarget*                             | :heavy_check_mark:                                                          | A built-in environment name or the stable env_* ID of a custom environment. |
| `installationId`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `audience`                                                                  | *string*[]                                                                  | :heavy_minus_sign:                                                          | N/A                                                                         |
| `scopes`                                                                    | *string*[]                                                                  | :heavy_minus_sign:                                                          | N/A                                                                         |
| `resources`                                                                 | *string*[]                                                                  | :heavy_minus_sign:                                                          | N/A                                                                         |
| `authorizationDetails`                                                      | [models.AuthorizationDetails](../models/authorizationdetails.md)[]          | :heavy_minus_sign:                                                          | N/A                                                                         |
| `name`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `externalSubject`                                                           | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `installation`                                                              | [models.Installation](../models/installation.md)                            | :heavy_minus_sign:                                                          | N/A                                                                         |
| `tenant`                                                                    | [models.Tenant](../models/tenant.md)                                        | :heavy_minus_sign:                                                          | N/A                                                                         |
| `data`                                                                      | Record<string, *any*>                                                       | :heavy_minus_sign:                                                          | N/A                                                                         |