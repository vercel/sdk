# ThreeHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortySix } from "@vercel/sdk/models/usereventpayload340budget.js";

let value: ThreeHundredAndFortySix = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "postgres",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `transferRequestCode`              | *string*                           | :heavy_check_mark:                 | N/A                                |
| `store`                            | [models.Store](../models/store.md) | :heavy_check_mark:                 | N/A                                |