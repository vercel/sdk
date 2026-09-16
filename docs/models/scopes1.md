# Scopes1

The access scopes granted to the token.

## Example Usage

```typescript
import { Scopes1 } from "@vercel/sdk/models/authtoken.js";

let value: Scopes1 = {
  createdAt: 6949.11,
  type: "user",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `createdAt`                                      | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `expiresAt`                                      | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `origin`                                         | [models.ScopesOrigin](../models/scopesorigin.md) | :heavy_minus_sign:                               | N/A                                              |
| `sudo`                                           | [models.Sudo](../models/sudo.md)                 | :heavy_minus_sign:                               | N/A                                              |
| `type`                                           | *"user"*                                         | :heavy_check_mark:                               | N/A                                              |