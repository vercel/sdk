# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "@vercel/sdk/models/getobservabilityschemabymetricidop.js";

let value: ResponseBody = {
  id: "<id>",
  description:
    "pfft bliss gallery failing finger gallery minor savour operating",
  dimensions: [
    {
      name: "<value>",
      label: "<value>",
    },
  ],
  unit: "katal",
  aggregations: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  defaultAggregation: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `description`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `dimensions`                                   | [models.Dimensions](../models/dimensions.md)[] | :heavy_check_mark:                             | N/A                                            |
| `unit`                                         | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `aggregations`                                 | *string*[]                                     | :heavy_check_mark:                             | N/A                                            |
| `defaultAggregation`                           | *string*                                       | :heavy_check_mark:                             | N/A                                            |