# CreateFlagPrimaryMetrics

## Example Usage

```typescript
import { CreateFlagPrimaryMetrics } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagPrimaryMetrics = {
  name: "<value>",
  metricType: "count",
  metricUnit: "session",
  directionality: "decreaseIsGood",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `metricFormula`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `metricType`                                                                                     | [models.CreateFlagFeatureFlagsMetricType](../models/createflagfeatureflagsmetrictype.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `metricUnit`                                                                                     | [models.CreateFlagFeatureFlagsMetricUnit](../models/createflagfeatureflagsmetricunit.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `directionality`                                                                                 | [models.CreateFlagFeatureFlagsDirectionality](../models/createflagfeatureflagsdirectionality.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |