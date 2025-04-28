# Scopes1

The access scopes granted to the token.

## Example Usage

```typescript
import { Scopes1 } from "@vercel/sdk/models/authtoken.js";

let value: Scopes1 = {
  type: "user",
  origin: "otp",
  createdAt: 9263.32,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | [models.ScopesType](../models/scopestype.md)     | :heavy_check_mark:                               | N/A                                              |
| `sudo`                                           | [models.Sudo](../models/sudo.md)                 | :heavy_minus_sign:                               | N/A                                              |
| `origin`                                         | [models.ScopesOrigin](../models/scopesorigin.md) | :heavy_check_mark:                               | N/A                                              |
| `createdAt`                                      | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `expiresAt`                                      | *number*                                         | :heavy_minus_sign:                               | N/A                                              |