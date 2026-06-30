# GetProjectRoute2

## Example Usage

```typescript
import { GetProjectRoute2 } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectRoute2 = {
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `has`                                                                  | *models.GetProjectRouteHas*[]                                          | :heavy_check_mark:                                                     | N/A                                                                    |
| `mitigate`                                                             | [models.GetProjectRouteMitigate](../models/getprojectroutemitigate.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `src`                                                                  | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |