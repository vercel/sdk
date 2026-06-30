# GetProjectOidcTokenConfig

## Example Usage

```typescript
import { GetProjectOidcTokenConfig } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectOidcTokenConfig = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `enabled`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Whether or not to generate OpenID Connect JSON Web Tokens.                        |
| `issuerMode`                                                                      | [models.GetProjectIssuerMode](../models/getprojectissuermode.md)                  | :heavy_minus_sign:                                                                | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com` |