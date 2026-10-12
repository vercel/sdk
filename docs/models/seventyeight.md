# SeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyEight } from "@vercel/sdk/models/after.js";

let value: SeventyEight = {
  changedFields: [
    "tax",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `changedFields`                                                    | [models.PayloadChangedFields](../models/payloadchangedfields.md)[] | :heavy_check_mark:                                                 | N/A                                                                |