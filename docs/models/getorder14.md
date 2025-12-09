# GetOrder14

## Example Usage

```typescript
import { GetOrder14 } from "@vercel/sdk/models/getorderop.js";

let value: GetOrder14 = {
  code: "cannot-transfer-in-until",
  details: {
    numDaysUntilTransferrable: 8639.69,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `code`                                                                                   | *"cannot-transfer-in-until"*                                                             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `details`                                                                                | [models.GetOrder1DomainsRegistrarDetails](../models/getorder1domainsregistrardetails.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |