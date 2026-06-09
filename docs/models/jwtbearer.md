# JwtBearer

## Example Usage

```typescript
import { JwtBearer } from "@vercel/sdk/models/createconnectorop.js";

let value: JwtBearer = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `enabled`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `scopes`                                                           | *string*[]                                                         | :heavy_minus_sign:                                                 | Default scopes to request when token params specify scopes: ["*"]. |
| `sub`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `iss`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `aud`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `additionalClaims`                                                 | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | N/A                                                                |
| `ttl`                                                              | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `useClientCredentials`                                             | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |