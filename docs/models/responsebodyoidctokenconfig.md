# ResponseBodyOidcTokenConfig

## Example Usage

```typescript
import { ResponseBodyOidcTokenConfig } from "@vercel/sdk/models/getprojectsrouteprojects1.js";

let value: ResponseBodyOidcTokenConfig = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `enabled`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Whether or not to generate OpenID Connect JSON Web Tokens.                        |
| `issuerMode`                                                                      | [models.ResponseBodyIssuerMode](../models/responsebodyissuermode.md)              | :heavy_minus_sign:                                                                | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com` |