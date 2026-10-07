# ThreeHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyOne } from "@vercel/sdk/models/threehundredandsixtytwo.js";

let value: ThreeHundredAndSeventyOne = {
  store: {
    id: "<id>",
    type: "blob",
  },
  transferRequestCode: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `store`                            | [models.Store](../models/store.md) | :heavy_check_mark:                 | N/A                                |
| `transferRequestCode`              | *string*                           | :heavy_check_mark:                 | N/A                                |