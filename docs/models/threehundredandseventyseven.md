# ThreeHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventySeven } from "@vercel/sdk/models/threehundredandsixtyeight.js";

let value: ThreeHundredAndSeventySeven = {
  store: {
    id: "<id>",
    type: "blob",
  },
  transferRequestCode: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `store`                            | [models.Store](../models/store.md) | :heavy_check_mark:                 | N/A                                |
| `transferRequestCode`              | *string*                           | :heavy_check_mark:                 | N/A                                |