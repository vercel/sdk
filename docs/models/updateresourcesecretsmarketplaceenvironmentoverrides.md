# UpdateResourceSecretsMarketplaceEnvironmentOverrides

A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment.

## Example Usage

```typescript
import { UpdateResourceSecretsMarketplaceEnvironmentOverrides } from "@vercel/sdk/models/updateresourceop.js";

let value: UpdateResourceSecretsMarketplaceEnvironmentOverrides = {};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `development`                           | *string*                                | :heavy_minus_sign:                      | Value used for development environment. |
| `preview`                               | *string*                                | :heavy_minus_sign:                      | Value used for preview environment.     |
| `production`                            | *string*                                | :heavy_minus_sign:                      | Value used for production environment.  |