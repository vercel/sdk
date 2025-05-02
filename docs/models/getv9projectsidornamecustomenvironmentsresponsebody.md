# GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody

## Example Usage

```typescript
import { GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody } from "@vercel/sdk/models/getv9projectsidornamecustomenvironmentsop.js";

let value: GetV9ProjectsIdOrNameCustomEnvironmentsResponseBody = {
  accountLimit: {
    total: 8449.23,
  },
  environments: [
    {
      id: "<id>",
      slug: "<value>",
      type: "preview",
      createdAt: 8241.49,
      updatedAt: 3411.19,
    },
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `accountLimit`                                                                                                                   | [models.AccountLimit](../models/accountlimit.md)                                                                                 | :heavy_check_mark:                                                                                                               | The maximum number of custom environments allowed either by the team's plan type or a custom override.                           |
| `environments`                                                                                                                   | [models.GetV9ProjectsIdOrNameCustomEnvironmentsEnvironments](../models/getv9projectsidornamecustomenvironmentsenvironments.md)[] | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |