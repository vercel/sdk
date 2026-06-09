# TypeOauth

## Example Usage

```typescript
import { TypeOauth } from "@vercel/sdk/models/createconnectorop.js";

let value: TypeOauth = {
  clientId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `serverUrl`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `serverConfig`                                             | [models.ServerConfig](../models/serverconfig.md)           | :heavy_minus_sign:                                         | N/A                                                        |
| `clientId`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `clientSecret`                                             | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `tokenEndpointAuthMethod`                                  | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `responseType`                                             | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `pkceRequired`                                             | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `codeChallengeMethod`                                      | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `userAuthorization`                                        | [models.UserAuthorization](../models/userauthorization.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `refreshTokens`                                            | [models.RefreshTokens](../models/refreshtokens.md)         | :heavy_minus_sign:                                         | N/A                                                        |
| `clientCredentials`                                        | [models.ClientCredentials](../models/clientcredentials.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `defaultAudience`                                          | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `authorizationUrlParams`                                   | Record<string, *string*>                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `jwtBearer`                                                | [models.JwtBearer](../models/jwtbearer.md)                 | :heavy_minus_sign:                                         | N/A                                                        |