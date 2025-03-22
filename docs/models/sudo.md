# Sudo

## Example Usage

```typescript
import { Sudo } from "@vercel/sdk/models/authtoken.js";

let value: Sudo = {
  origin: "recovery-code",
  expiresAt: 1040.92,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `origin`                                                             | [models.AuthTokenScopes1Origin](../models/authtokenscopes1origin.md) | :heavy_check_mark:                                                   | Possible multi-factor origins                                        |
| `expiresAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |