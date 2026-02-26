# ResponseBodySeatBlock

NSNB Blocked metadata

## Example Usage

```typescript
import { ResponseBodySeatBlock } from "@vercel/sdk/models/getdeploymentop.js";

let value: ResponseBodySeatBlock = {
  blockCode: "TEAM_ACCESS_REQUIRED",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `blockCode`                                                                         | [models.ResponseBodyBlockCode](../models/responsebodyblockcode.md)                  | :heavy_check_mark:                                                                  | The NSNB decision code for the seat block. TODO: We should consolidate block types. |
| `userId`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | The blocked vercel user ID.                                                         |