# SeatBlock

NSNB Blocked metadata

## Example Usage

```typescript
import { SeatBlock } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: SeatBlock = {
  blockCode: "COMMIT_AUTHOR_REQUIRED",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `blockCode`                                                                                                          | [models.BlockCode](../models/blockcode.md)                                                                           | :heavy_check_mark:                                                                                                   | The NSNB decision code for the seat block. TODO: We should consolidate block types.                                  |
| `userId`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The blocked vercel user ID.                                                                                          |
| `isVerified`                                                                                                         | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Determines if the user was verified during the block. In the git integration case, the commit sender was the author. |
| `gitUserId`                                                                                                          | *models.CreateDeploymentGitUserId*                                                                                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `gitProvider`                                                                                                        | [models.CreateDeploymentGitProvider](../models/createdeploymentgitprovider.md)                                       | :heavy_minus_sign:                                                                                                   | The git provider type associated with gitUserId.                                                                     |