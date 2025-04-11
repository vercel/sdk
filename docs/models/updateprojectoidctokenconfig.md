# UpdateProjectOidcTokenConfig

OpenID Connect JSON Web Token generation configuration.

## Example Usage

```typescript
import { UpdateProjectOidcTokenConfig } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectOidcTokenConfig = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `enabled`                                                                     | *boolean*                                                                     | :heavy_minus_sign:                                                            | Whether or not to generate OpenID Connect JSON Web Tokens.                    |
| `issuerMode`                                                                  | [models.UpdateProjectIssuerMode](../models/updateprojectissuermode.md)        | :heavy_minus_sign:                                                            | team: `https://oidc.vercel.com/[team_slug]` global: `https://oidc.vercel.com` |