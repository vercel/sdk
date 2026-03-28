# ResponseBodyPrimaryMetrics

## Example Usage

```typescript
import { ResponseBodyPrimaryMetrics } from "@vercel/sdk/models/updateflagop.js";

let value: ResponseBodyPrimaryMetrics = {
  name: "<value>",
  metricType: "count",
  metricUnit: "visitor",
  directionality: "decreaseIsGood",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `metricFormula`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `metricType`                                                                                     | [models.UpdateFlagResponseBodyMetricType](../models/updateflagresponsebodymetrictype.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `metricUnit`                                                                                     | [models.UpdateFlagResponseBodyMetricUnit](../models/updateflagresponsebodymetricunit.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `directionality`                                                                                 | [models.UpdateFlagResponseBodyDirectionality](../models/updateflagresponsebodydirectionality.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |