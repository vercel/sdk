# CreateProjectOidcTokenConfig

## Example Usage

```typescript
import { CreateProjectOidcTokenConfig } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectOidcTokenConfig = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `enabled`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Whether or not to generate OpenID Connect JSON Web Tokens.                        |
| `issuerMode`                                                                      | [models.CreateProjectIssuerMode](../models/createprojectissuermode.md)            | :heavy_minus_sign:                                                                | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com` |