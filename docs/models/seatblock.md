# SeatBlock

NSNB Blocked metadata

## Example Usage

```typescript
import { SeatBlock } from "@vercel/sdk/models/createdeploymentop.js";

let value: SeatBlock = {
  blockCode: "COMMIT_AUTHOR_REQUIRED",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `blockCode`                                                                         | [models.BlockCode](../models/blockcode.md)                                          | :heavy_check_mark:                                                                  | The NSNB decision code for the seat block. TODO: We should consolidate block types. |
| `userId`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | The blocked vercel user ID.                                                         |