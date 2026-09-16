# ResponseBodySeatBlock

NSNB Blocked metadata

## Example Usage

```typescript
import { ResponseBodySeatBlock } from "@vercel/sdk/models/createdeploymentmissingdeploymentsresponse1.js";

let value: ResponseBodySeatBlock = {
  blockCode: "COMMIT_AUTHOR_REQUIRED",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `blockCode`                                                                                                          | [models.ResponseBodyBlockCode](../models/responsebodyblockcode.md)                                                   | :heavy_check_mark:                                                                                                   | The NSNB decision code for the seat block. TODO: We should consolidate block types.                                  |
| `gitProvider`                                                                                                        | [models.ResponseBodyGitProvider](../models/responsebodygitprovider.md)                                               | :heavy_minus_sign:                                                                                                   | The git provider type associated with gitUserId.                                                                     |
| `gitUserId`                                                                                                          | *models.ResponseBodyGitUserId*                                                                                       | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `isVerified`                                                                                                         | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Determines if the user was verified during the block. In the git integration case, the commit sender was the author. |
| `userId`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The blocked vercel user ID.                                                                                          |