# UserEventPayload164JoinedFrom

## Example Usage

```typescript
import { UserEventPayload164JoinedFrom } from "@vercel/sdk/models/bandwidth.js";

let value: UserEventPayload164JoinedFrom = {
  origin: "mail",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `origin`                                                                   | [models.UserEventPayload164Origin](../models/usereventpayload164origin.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `commitId`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `repoId`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `repoPath`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `gitUserId`                                                                | *models.UserEventPayload164GitUserId*                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `gitUserLogin`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ssoUserId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ssoConnectedAt`                                                           | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `idpUserId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `dsyncUserId`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `dsyncConnectedAt`                                                         | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |