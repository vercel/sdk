# PayloadJoinedFrom

## Example Usage

```typescript
import { PayloadJoinedFrom } from "@vercel/sdk/models/userevent.js";

let value: PayloadJoinedFrom = {
  origin: "nsnb-redeploy",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `origin`                                           | [models.PayloadOrigin](../models/payloadorigin.md) | :heavy_check_mark:                                 | N/A                                                |
| `commitId`                                         | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `repoId`                                           | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `repoPath`                                         | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `gitUserId`                                        | *models.PayloadGitUserId*                          | :heavy_minus_sign:                                 | N/A                                                |
| `gitUserLogin`                                     | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `ssoUserId`                                        | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `ssoConnectedAt`                                   | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `idpUserId`                                        | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `dsyncUserId`                                      | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `dsyncConnectedAt`                                 | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |