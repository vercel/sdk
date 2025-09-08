# GetProjectsRoute2

## Example Usage

```typescript
import { GetProjectsRoute2 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsRoute2 = {
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `has`                                                                    | *models.GetProjectsRouteHas*[]                                           | :heavy_check_mark:                                                       | N/A                                                                      |
| `mitigate`                                                               | [models.GetProjectsRouteMitigate](../models/getprojectsroutemitigate.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `src`                                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |