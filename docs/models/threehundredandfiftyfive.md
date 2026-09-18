# ThreeHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyFive } from "@vercel/sdk/models/payloadcountry.js";

let value: ThreeHundredAndFiftyFive = {
  store: {
    id: "<id>",
    type: "redis",
  },
  transferRequestCode: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `store`                            | [models.Store](../models/store.md) | :heavy_check_mark:                 | N/A                                |
| `transferRequestCode`              | *string*                           | :heavy_check_mark:                 | N/A                                |