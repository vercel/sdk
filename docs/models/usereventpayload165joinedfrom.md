# UserEventPayload165JoinedFrom

## Example Usage

```typescript
import { UserEventPayload165JoinedFrom } from "@vercel/sdk/models/bandwidth.js";

let value: UserEventPayload165JoinedFrom = {
  origin: "nsnb-viewer-upgrade",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `origin`                                                                   | [models.UserEventPayload165Origin](../models/usereventpayload165origin.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `commitId`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `repoId`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `repoPath`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `gitUserId`                                                                | *models.UserEventPayload165GitUserId*                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `gitUserLogin`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ssoUserId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ssoConnectedAt`                                                           | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `idpUserId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `dsyncUserId`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `dsyncConnectedAt`                                                         | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |