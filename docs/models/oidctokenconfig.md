# OidcTokenConfig

OpenID Connect JSON Web Token generation configuration.

## Example Usage

```typescript
import { OidcTokenConfig } from "@vercel/sdk/models/createprojectop.js";

let value: OidcTokenConfig = {};
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`enabled`~~                                                                                                                                                                       | *boolean*                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Whether or not to generate OpenID Connect JSON Web Tokens. |
| `issuerMode`                                                                                                                                                                        | [models.IssuerMode](../models/issuermode.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                  | team: `https://oidc.vercel.com/[team_slug]` global: `https://oidc.vercel.com`                                                                                                       |