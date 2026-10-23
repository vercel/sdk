# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/twenty.js";

let value: EightyOne = {
  changedFields: [
    "purchaseOrder",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `changedFields`                                                    | [models.PayloadChangedFields](../models/payloadchangedfields.md)[] | :heavy_check_mark:                                                 | N/A                                                                |