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

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `blockCode`                                                                         | [models.GetDeploymentsBlockCode](../models/getdeploymentsblockcode.md)              | :heavy_check_mark:                                                                  | The NSNB decision code for the seat block. TODO: We should consolidate block types. |
| `userId`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | The blocked vercel user ID.                                                         |