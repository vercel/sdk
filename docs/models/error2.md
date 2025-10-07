# Error2

## Example Usage

```typescript
import { Error2 } from "@vercel/sdk/models/getorderop.js";

let value: Error2 = {
  code: "tld-outage",
  details: {
    tlds: [],
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `code`                                                           | [models.GetOrderErrorCode](../models/getordererrorcode.md)       | :heavy_check_mark:                                               | N/A                                                              |
| `details`                                                        | [models.GetOrderErrorDetails](../models/getordererrordetails.md) | :heavy_check_mark:                                               | N/A                                                              |