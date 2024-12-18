# UpdateProjectDataCacheOidcTokenConfig

## Example Usage

```typescript
import { UpdateProjectDataCacheOidcTokenConfig } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheOidcTokenConfig = {
  enabled: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `issuerMode`                                                                             | [models.UpdateProjectDataCacheIssuerMode](../models/updateprojectdatacacheissuermode.md) | :heavy_minus_sign:                                                                       | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com`        |