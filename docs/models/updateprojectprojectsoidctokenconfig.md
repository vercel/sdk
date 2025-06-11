# UpdateProjectProjectsOidcTokenConfig

## Example Usage

```typescript
import { UpdateProjectProjectsOidcTokenConfig } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectProjectsOidcTokenConfig = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `enabled`                                                                              | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether or not to generate OpenID Connect JSON Web Tokens.                             |
| `issuerMode`                                                                           | [models.UpdateProjectProjectsIssuerMode](../models/updateprojectprojectsissuermode.md) | :heavy_minus_sign:                                                                     | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com`      |