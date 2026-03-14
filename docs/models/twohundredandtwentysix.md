# TwoHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentySix } from "@vercel/sdk/models/usereventfactors1.js";

let value: TwoHundredAndTwentySix = {
  store: {
    name: "<value>",
    id: "<id>",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `store`                            | [models.Store](../models/store.md) | :heavy_check_mark:                 | N/A                                |
| `ownerId`                          | *string*                           | :heavy_minus_sign:                 | N/A                                |