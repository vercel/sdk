# ThreeHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwenty } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndTwenty = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "blob",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `transferRequestCode`              | *string*                           | :heavy_check_mark:                 | N/A                                |
| `store`                            | [models.Store](../models/store.md) | :heavy_check_mark:                 | N/A                                |