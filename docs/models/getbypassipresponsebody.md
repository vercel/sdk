# GetBypassIpResponseBody

## Example Usage

```typescript
import { GetBypassIpResponseBody } from "@vercel/sdk/models/getbypassipop.js";

let value: GetBypassIpResponseBody = {
  result: [
    {
      createdAt: "1719040492539",
      domain: "sore-lobster.biz",
      id: "<id>",
      ip: "100.7.225.121",
      ownerId: "<id>",
      updatedAt: "1735626440973",
      updatedAtHour: "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `pagination`                                                       | [models.GetBypassIpPagination](../models/getbypassippagination.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `result`                                                           | [models.GetBypassIpResult](../models/getbypassipresult.md)[]       | :heavy_check_mark:                                                 | N/A                                                                |