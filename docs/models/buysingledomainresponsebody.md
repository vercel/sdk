# BuySingleDomainResponseBody

Success

## Example Usage

```typescript
import { BuySingleDomainResponseBody } from "@vercel/sdk/models/buysingledomainop.js";

let value: BuySingleDomainResponseBody = {
  orderId: "<id>",
  links: {
    "key": {
      href: "<value>",
      method: "PATCH",
    },
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `orderId`                                          | *string*                                           | :heavy_check_mark:                                 | A valid order ID                                   |
| `links`                                            | Record<string, [models.Links](../models/links.md)> | :heavy_check_mark:                                 | N/A                                                |