# ServerConfig

## Example Usage

```typescript
import { ServerConfig } from "@vercel/sdk/models/createconnectorop.js";

let value: ServerConfig = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `issuer`                                     | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `authorizationEndpoint`                      | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `tokenEndpoint`                              | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `userinfoEndpoint`                           | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `jwksUri`                                    | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `jwks`                                       | [models.Jwks](../models/jwks.md)             | :heavy_minus_sign:                           | N/A                                          |
| `revocationEndpoint`                         | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `introspectionEndpoint`                      | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `endSessionEndpoint`                         | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `deviceAuthorizationEndpoint`                | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `registrationEndpoint`                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `responseTypesSupported`                     | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `tokenEndpointAuthMethodsSupported`          | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `tokenEndpointAuthSigningAlgValuesSupported` | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `scopesSupported`                            | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `grantTypesSupported`                        | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `responseModesSupported`                     | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `subjectTypesSupported`                      | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `idTokenSigningAlgValuesSupported`           | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `claimTypesSupported`                        | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `claimsSupported`                            | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `codeChallengeMethodsSupported`              | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `promptValuesSupported`                      | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `claimsParameterSupported`                   | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `requestParameterSupported`                  | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `requestUriParameterSupported`               | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `requireRequestUriRegistration`              | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `serviceDocumentation`                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `opPolicyUri`                                | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `opTosUri`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `logoUri`                                    | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `clientIdMetadataDocumentSupported`          | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `authorizationDetailsTypesSupported`         | *string*[]                                   | :heavy_minus_sign:                           | N/A                                          |
| `additionalProperties`                       | Record<string, *any*>                        | :heavy_minus_sign:                           | N/A                                          |