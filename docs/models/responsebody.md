# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "@vercel/sdk/models/getobservabilityschemabymetricidop.js";

let value: ResponseBody = {
  aggregations: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  defaultAggregation: "<value>",
  description: "gah economise cannon sonar",
  dimensions: [],
  id: "<id>",
  unit: "pascal",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `aggregations`                                 | *string*[]                                     | :heavy_check_mark:                             | N/A                                            |
| `defaultAggregation`                           | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `description`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `dimensions`                                   | [models.Dimensions](../models/dimensions.md)[] | :heavy_check_mark:                             | N/A                                            |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `unit`                                         | *string*                                       | :heavy_check_mark:                             | N/A                                            |