# GetProjectsResponseBodyProjectsOidcTokenConfig

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsOidcTokenConfig } from "@vercel/sdk/models/getprojectsrouteprojectsresponse200applicationjsonresponsebodymitigate.js";

let value: GetProjectsResponseBodyProjectsOidcTokenConfig = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `enabled`                                                                                  | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Whether or not to generate OpenID Connect JSON Web Tokens.                                 |
| `issuerMode`                                                                               | [models.GetProjectsResponseBodyIssuerMode](../models/getprojectsresponsebodyissuermode.md) | :heavy_minus_sign:                                                                         | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com`          |