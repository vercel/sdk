# Sudo

## Example Usage

```typescript
import { Sudo } from "@vercel/sdk/models/authtoken.js";

let value: Sudo = {
  expiresAt: 3326.47,
  origin: "otp",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `expiresAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `origin`                                                             | [models.AuthTokenScopes1Origin](../models/authtokenscopes1origin.md) | :heavy_check_mark:                                                   | Possible step-up auth origins                                        |
| `verifiedAt`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |