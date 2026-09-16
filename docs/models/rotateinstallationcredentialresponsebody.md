# RotateInstallationCredentialResponseBody

## Example Usage

```typescript
import { RotateInstallationCredentialResponseBody } from "@vercel/sdk/models/rotateinstallationcredentialop.js";

let value: RotateInstallationCredentialResponseBody = {
  accessToken: "<value>",
  expiresIn: 8692.5,
  scope: "<value>",
  tokenType: "oauth2-token",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `accessToken`                              | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `expiresIn`                                | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `scope`                                    | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `tokenType`                                | [models.TokenType](../models/tokentype.md) | :heavy_check_mark:                         | N/A                                        |