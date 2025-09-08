# CreateProjectRoute2

## Example Usage

```typescript
import { CreateProjectRoute2 } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectRoute2 = {
  has: [
    {
      type: "host",
      value: {
        eq: "<value>",
      },
    },
  ],
  mitigate: {
    action: "block_legal_cwc",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `has`                                                                        | *models.CreateProjectRouteHas*[]                                             | :heavy_check_mark:                                                           | N/A                                                                          |
| `mitigate`                                                                   | [models.CreateProjectRouteMitigate](../models/createprojectroutemitigate.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `src`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |