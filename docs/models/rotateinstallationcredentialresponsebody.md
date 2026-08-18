# RotateInstallationCredentialResponseBody

## Example Usage

```typescript
import { RotateInstallationCredentialResponseBody } from "@vercel/sdk/models/rotateinstallationcredentialop.js";

let value: RotateInstallationCredentialResponseBody = {
  scope: "<value>",
  expiresIn: 8692.5,
  accessToken: "<value>",
  tokenType: "oauth2-token",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `scope`                                    | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `expiresIn`                                | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `accessToken`                              | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `tokenType`                                | [models.TokenType](../models/tokentype.md) | :heavy_check_mark:                         | N/A                                        |