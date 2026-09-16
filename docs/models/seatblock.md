# SeatBlock

NSNB Blocked metadata

## Example Usage

```typescript
import { SeatBlock } from "@vercel/sdk/models/canceldeploymentdestinationdeployments2.js";

let value: SeatBlock = {
  blockCode: "TEAM_ACCESS_REQUIRED",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `blockCode`                                                                                                          | [models.BlockCode](../models/blockcode.md)                                                                           | :heavy_check_mark:                                                                                                   | The NSNB decision code for the seat block. TODO: We should consolidate block types.                                  |
| `gitProvider`                                                                                                        | [models.CancelDeploymentGitProvider](../models/canceldeploymentgitprovider.md)                                       | :heavy_minus_sign:                                                                                                   | The git provider type associated with gitUserId.                                                                     |
| `gitUserId`                                                                                                          | *models.CancelDeploymentGitUserId*                                                                                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `isVerified`                                                                                                         | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Determines if the user was verified during the block. In the git integration case, the commit sender was the author. |
| `userId`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The blocked vercel user ID.                                                                                          |