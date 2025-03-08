# One

The access scopes granted to the token.

## Example Usage

```typescript
import { One } from "@vercel/sdk/models/authtoken.js";

let value: One = {
  type: "user",
  origin: "sms",
  createdAt: 5749.9,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | [models.AuthTokenScopesType](../models/authtokenscopestype.md) | :heavy_check_mark:                                             | N/A                                                            |
| `sudo`                                                         | [models.Sudo](../models/sudo.md)                               | :heavy_minus_sign:                                             | N/A                                                            |
| `origin`                                                       | [models.ScopesOrigin](../models/scopesorigin.md)               | :heavy_check_mark:                                             | N/A                                                            |
| `createdAt`                                                    | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `expiresAt`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |