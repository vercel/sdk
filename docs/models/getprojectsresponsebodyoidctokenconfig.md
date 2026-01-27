# GetProjectsResponseBodyOidcTokenConfig

## Example Usage

```typescript
import { GetProjectsResponseBodyOidcTokenConfig } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsResponseBodyOidcTokenConfig = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                  | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Whether or not to generate OpenID Connect JSON Web Tokens.                                                 |
| `issuerMode`                                                                                               | [models.GetProjectsResponseBodyProjectsIssuerMode](../models/getprojectsresponsebodyprojectsissuermode.md) | :heavy_minus_sign:                                                                                         | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com`                          |