# Sudo

## Example Usage

```typescript
import { Sudo } from "@vercel/sdk/models/authtoken.js";

let value: Sudo = {
  origin: "totp",
  expiresAt: 2002.64,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `origin`                                                             | [models.AuthTokenScopes1Origin](../models/authtokenscopes1origin.md) | :heavy_check_mark:                                                   | Possible multi-factor origins                                        |
| `expiresAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |