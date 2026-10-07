# SeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyFour } from "@vercel/sdk/models/sixty.js";

let value: SeventyFour = {
  changedFields: [
    "purchaseOrder",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `changedFields`                                                    | [models.PayloadChangedFields](../models/payloadchangedfields.md)[] | :heavy_check_mark:                                                 | N/A                                                                |