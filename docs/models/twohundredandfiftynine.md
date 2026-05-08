# TwoHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyNine } from "@vercel/sdk/models/twohundredandtwentythree.js";

let value: TwoHundredAndFiftyNine = {
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