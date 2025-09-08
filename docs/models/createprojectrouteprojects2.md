# CreateProjectRouteProjects2

## Example Usage

```typescript
import { CreateProjectRouteProjects2 } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectRouteProjects2 = {
  has: [
    {
      type: "header",
      key: "x-vercel-ip-country",
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `has`                                                                                        | *models.CreateProjectRouteProjectsHas*[]                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `mitigate`                                                                                   | [models.CreateProjectRouteProjectsMitigate](../models/createprojectrouteprojectsmitigate.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `src`                                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |