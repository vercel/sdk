# QueryExperimentationItemsResponseBody

## Example Usage

```typescript
import { QueryExperimentationItemsResponseBody } from "@vercel/sdk/models/queryexperimentationitemsop.js";

let value: QueryExperimentationItemsResponseBody = {
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
| `items`                                                                                | [models.QueryExperimentationItemsItems](../models/queryexperimentationitemsitems.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |