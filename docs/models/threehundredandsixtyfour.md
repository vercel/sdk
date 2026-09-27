# ThreeHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyFour } from "@vercel/sdk/models/usereventpayload353geolocationnames.js";

let value: ThreeHundredAndSixtyFour = {
  store: {
    id: "<id>",
    type: "integration",
  },
  transferRequestCode: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `store`                            | [models.Store](../models/store.md) | :heavy_check_mark:                 | N/A                                |
| `transferRequestCode`              | *string*                           | :heavy_check_mark:                 | N/A                                |