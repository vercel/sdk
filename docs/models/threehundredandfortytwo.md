# ThreeHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyTwo } from "@vercel/sdk/models/usereventpayload336budget.js";

let value: ThreeHundredAndFortyTwo = {
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