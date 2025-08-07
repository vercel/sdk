# GetBypassIpResponseBody

## Example Usage

```typescript
import { GetBypassIpResponseBody } from "@vercel/sdk/models/getbypassipop.js";

let value: GetBypassIpResponseBody = {
  result: [
    {
      ownerId: "<id>",
      id: "<id>",
      domain: "linear-saloon.name",
      ip: "30.100.7.225",
      createdAt: "1719080074273",
      updatedAt: "1735626440973",
      updatedAtHour: "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `result`                                                           | [models.GetBypassIpResult](../models/getbypassipresult.md)[]       | :heavy_check_mark:                                                 | N/A                                                                |
| `pagination`                                                       | [models.GetBypassIpPagination](../models/getbypassippagination.md) | :heavy_minus_sign:                                                 | N/A                                                                |