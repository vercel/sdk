# GetOrderErrorDetails

## Example Usage

```typescript
import { GetOrderErrorDetails } from "@vercel/sdk/models/getorderop.js";

let value: GetOrderErrorDetails = {
  tlds: [
    {
      tldName: "<value>",
      endsAt: "<value>",
    },
  ],
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `tlds`                             | [models.Tlds](../models/tlds.md)[] | :heavy_check_mark:                 | N/A                                |