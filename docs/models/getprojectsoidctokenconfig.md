# GetProjectsOidcTokenConfig

## Example Usage

```typescript
import { GetProjectsOidcTokenConfig } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsOidcTokenConfig = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `enabled`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Whether or not to generate OpenID Connect JSON Web Tokens.                        |
| `issuerMode`                                                                      | [models.GetProjectsIssuerMode](../models/getprojectsissuermode.md)                | :heavy_minus_sign:                                                                | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com` |