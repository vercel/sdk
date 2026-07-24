# UploadProjectAvatarOidcTokenConfig

## Example Usage

```typescript
import { UploadProjectAvatarOidcTokenConfig } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarOidcTokenConfig = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `enabled`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Whether or not to generate OpenID Connect JSON Web Tokens.                         |
| `issuerMode`                                                                       | [models.UploadProjectAvatarIssuerMode](../models/uploadprojectavatarissuermode.md) | :heavy_minus_sign:                                                                 | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com`  |