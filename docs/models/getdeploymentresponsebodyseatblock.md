# GetDeploymentResponseBodySeatBlock

NSNB Blocked metadata

## Example Usage

```typescript
import { GetDeploymentResponseBodySeatBlock } from "@vercel/sdk/models/getdeploymentmaxdurationdeployments2.js";

let value: GetDeploymentResponseBodySeatBlock = {
  blockCode: "TEAM_ACCESS_REQUIRED",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `blockCode`                                                                                                          | [models.GetDeploymentResponseBodyBlockCode](../models/getdeploymentresponsebodyblockcode.md)                         | :heavy_check_mark:                                                                                                   | The NSNB decision code for the seat block. TODO: We should consolidate block types.                                  |
| `gitProvider`                                                                                                        | [models.GetDeploymentResponseBodyGitProvider](../models/getdeploymentresponsebodygitprovider.md)                     | :heavy_minus_sign:                                                                                                   | The git provider type associated with gitUserId.                                                                     |
| `gitUserId`                                                                                                          | *models.GetDeploymentResponseBodyGitUserId*                                                                          | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `isVerified`                                                                                                         | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Determines if the user was verified during the block. In the git integration case, the commit sender was the author. |
| `userId`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The blocked vercel user ID.                                                                                          |