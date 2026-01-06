# GetOrder1DomainsRegistrarDetails

## Example Usage

```typescript
import { GetOrder1DomainsRegistrarDetails } from "@vercel/sdk/models/getorderop.js";

let value: GetOrder1DomainsRegistrarDetails = {
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