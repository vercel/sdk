# PayloadJoinedFrom

## Example Usage

```typescript
import { PayloadJoinedFrom } from "@vercel/sdk/models/trigger.js";

let value: PayloadJoinedFrom = {
  origin: "saml",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `commitId`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `dsyncConnectedAt`                                                         | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `dsyncUserId`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `gitUserId`                                                                | *models.PayloadGitUserId*                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `gitUserLogin`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `idpUserId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `origin`                                                                   | [models.UserEventPayload233Origin](../models/usereventpayload233origin.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `repoId`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `repoPath`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ssoConnectedAt`                                                           | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ssoUserId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |