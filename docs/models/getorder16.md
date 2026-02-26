# GetOrder16

## Example Usage

```typescript
import { GetOrder16 } from "@vercel/sdk/models/getorderop.js";

let value: GetOrder16 = {
  code: "cannot-transfer-in-until",
  details: {
    numDaysUntilTransferrable: 520.02,
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                                       | *"cannot-transfer-in-until"*                                                                                                                 | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `details`                                                                                                                                    | [models.GetOrder1DomainsRegistrarResponse200ApplicationJSONDetails](../models/getorder1domainsregistrarresponse200applicationjsondetails.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |