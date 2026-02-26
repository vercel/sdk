# CancelDeploymentSeatBlock

NSNB Blocked metadata

## Example Usage

```typescript
import { CancelDeploymentSeatBlock } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentSeatBlock = {
  blockCode: "TEAM_ACCESS_REQUIRED",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `blockCode`                                                                         | [models.CancelDeploymentBlockCode](../models/canceldeploymentblockcode.md)          | :heavy_check_mark:                                                                  | The NSNB decision code for the seat block. TODO: We should consolidate block types. |
| `userId`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | The blocked vercel user ID.                                                         |