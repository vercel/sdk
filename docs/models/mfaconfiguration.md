# MfaConfiguration

MFA configuration. When enabled, the user will be required to provide a second factor of authentication when logging in.

## Example Usage

```typescript
import { MfaConfiguration } from "@vercel/sdk/models/userevent.js";

let value: MfaConfiguration = {
  enabled: true,
  recoveryCodes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `enabled`                        | *boolean*                        | :heavy_check_mark:               | N/A                              |
| `enabledAt`                      | *number*                         | :heavy_minus_sign:               | N/A                              |
| `recoveryCodes`                  | *string*[]                       | :heavy_check_mark:               | N/A                              |
| `totp`                           | [models.Totp](../models/totp.md) | :heavy_minus_sign:               | N/A                              |