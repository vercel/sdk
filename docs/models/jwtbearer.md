# JwtBearer

JWT bearer grant settings.

## Example Usage

```typescript
import { JwtBearer } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: JwtBearer = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `enabled`                                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | Whether JWT bearer grants are enabled.                               |
| `scopes`                                                             | *string*[]                                                           | :heavy_minus_sign:                                                   | Default scopes to request when token params specify scopes: [\"*\"]. |
| `sub`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | Default JWT subject claim.                                           |
| `iss`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | Default JWT issuer claim.                                            |
| `aud`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | Default JWT audience claim.                                          |
| `additionalClaims`                                                   | Record<string, *any*>                                                | :heavy_minus_sign:                                                   | Additional claims included in generated JWT assertions.              |
| `ttl`                                                                | *number*                                                             | :heavy_minus_sign:                                                   | JWT lifetime in seconds.                                             |
| `useClientCredentials`                                               | *boolean*                                                            | :heavy_minus_sign:                                                   | Whether JWT bearer requests also use client credentials.             |