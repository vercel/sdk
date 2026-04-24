# GetProjectsByIdOrNameCustomEnvironmentsResponseBody

## Example Usage

```typescript
import { GetProjectsByIdOrNameCustomEnvironmentsResponseBody } from "@vercel/sdk/models/getprojectsbyidornamecustomenvironmentsop.js";

let value: GetProjectsByIdOrNameCustomEnvironmentsResponseBody = {
  accountLimit: {
    total: 3580.28,
  },
  environments: [
    {
      type: "preview",
      id: "<id>",
      createdAt: 518.37,
      slug: "<value>",
      updatedAt: 1483.86,
    },
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `accountLimit`                                                                                                                   | [models.AccountLimit](../models/accountlimit.md)                                                                                 | :heavy_check_mark:                                                                                                               | The maximum number of custom environments allowed either by the team's plan type or a custom override.                           |
| `environments`                                                                                                                   | [models.GetProjectsByIdOrNameCustomEnvironmentsEnvironments](../models/getprojectsbyidornamecustomenvironmentsenvironments.md)[] | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |