# ThreeHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndForty } from "@vercel/sdk/models/usereventpayload334budget.js";

let value: ThreeHundredAndForty = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "integration",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `transferRequestCode`              | *string*                           | :heavy_check_mark:                 | N/A                                |
| `store`                            | [models.Store](../models/store.md) | :heavy_check_mark:                 | N/A                                |