# TwoHundredAndEightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightySix } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndEightySix = {
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