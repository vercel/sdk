# ThreeHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirty } from "@vercel/sdk/models/addedprojects.js";

let value: ThreeHundredAndThirty = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "edge-config",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `transferRequestCode`              | *string*                           | :heavy_check_mark:                 | N/A                                |
| `store`                            | [models.Store](../models/store.md) | :heavy_check_mark:                 | N/A                                |