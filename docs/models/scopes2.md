# Scopes2

The access scopes granted to the token.

## Example Usage

```typescript
import { Scopes2 } from "@vercel/sdk/models/authtoken.js";

let value: Scopes2 = {
  createdAt: 7880.82,
  teamId: "<id>",
  type: "team",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `createdAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `expiresAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `origin`                                                           | [models.AuthTokenScopesOrigin](../models/authtokenscopesorigin.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `teamId`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `type`                                                             | *"team"*                                                           | :heavy_check_mark:                                                 | N/A                                                                |