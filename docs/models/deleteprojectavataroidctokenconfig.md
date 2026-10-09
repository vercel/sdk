# DeleteProjectAvatarOidcTokenConfig

## Example Usage

```typescript
import { DeleteProjectAvatarOidcTokenConfig } from "@vercel/sdk/models/deleteprojectavatarresponsebody.js";

let value: DeleteProjectAvatarOidcTokenConfig = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `enabled`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Whether or not to generate OpenID Connect JSON Web Tokens.                         |
| `issuerMode`                                                                       | [models.DeleteProjectAvatarIssuerMode](../models/deleteprojectavatarissuermode.md) | :heavy_minus_sign:                                                                 | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com`  |