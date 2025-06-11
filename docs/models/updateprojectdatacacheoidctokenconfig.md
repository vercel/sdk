# UpdateProjectDataCacheOidcTokenConfig

## Example Usage

```typescript
import { UpdateProjectDataCacheOidcTokenConfig } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheOidcTokenConfig = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Whether or not to generate OpenID Connect JSON Web Tokens.                               |
| `issuerMode`                                                                             | [models.UpdateProjectDataCacheIssuerMode](../models/updateprojectdatacacheissuermode.md) | :heavy_minus_sign:                                                                       | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com`        |