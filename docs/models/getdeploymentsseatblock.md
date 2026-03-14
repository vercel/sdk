# GetDeploymentsSeatBlock

NSNB Blocked metadata

## Example Usage

```typescript
import { GetDeploymentsSeatBlock } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsSeatBlock = {
  blockCode: "TEAM_ACCESS_REQUIRED",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `blockCode`                                                                                                          | [models.GetDeploymentsBlockCode](../models/getdeploymentsblockcode.md)                                               | :heavy_check_mark:                                                                                                   | The NSNB decision code for the seat block. TODO: We should consolidate block types.                                  |
| `userId`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The blocked vercel user ID.                                                                                          |
| `isVerified`                                                                                                         | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Determines if the user was verified during the block. In the git integration case, the commit sender was the author. |
| `gitUserId`                                                                                                          | *models.GetDeploymentsGitUserId*                                                                                     | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `gitProvider`                                                                                                        | [models.GetDeploymentsGitProvider](../models/getdeploymentsgitprovider.md)                                           | :heavy_minus_sign:                                                                                                   | The git provider type associated with gitUserId.                                                                     |