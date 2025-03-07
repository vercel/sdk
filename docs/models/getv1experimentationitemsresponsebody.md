# GetV1ExperimentationItemsResponseBody

## Example Usage

```typescript
import { GetV1ExperimentationItemsResponseBody } from "@vercel/sdk/models/getv1experimentationitemsop.js";

let value: GetV1ExperimentationItemsResponseBody = {
  items: [
    {
      id: "<id>",
      slug: "<value>",
      origin: "<value>",
      externalId: "<id>",
      integrationConfigurationId: "<id>",
      resourceId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [models.GetV1ExperimentationItemsItems](../models/getv1experimentationitemsitems.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |