# PayloadJoinedFrom

## Example Usage

```typescript
import { PayloadJoinedFrom } from "@vercel/sdk/models/usereventpayload260next.js";

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
| `origin`                                                                   | [models.UserEventPayload287Origin](../models/usereventpayload287origin.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `repoId`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `repoPath`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ssoConnectedAt`                                                           | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ssoIdFingerprint`                                                         | *string*                                                                   | :heavy_minus_sign:                                                         | How `ssoUserId` and `idpUserId` were made; absent when unknown.            |
| `ssoUserId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |