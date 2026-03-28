# ListFlagVersionsPrimaryMetrics

## Example Usage

```typescript
import { ListFlagVersionsPrimaryMetrics } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsPrimaryMetrics = {
  name: "<value>",
  metricType: "currency",
  metricUnit: "visitor",
  directionality: "increaseIsGood",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `metricFormula`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `metricType`                                                                                                 | [models.ListFlagVersionsFeatureFlagsMetricType](../models/listflagversionsfeatureflagsmetrictype.md)         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `metricUnit`                                                                                                 | [models.ListFlagVersionsFeatureFlagsMetricUnit](../models/listflagversionsfeatureflagsmetricunit.md)         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `directionality`                                                                                             | [models.ListFlagVersionsFeatureFlagsDirectionality](../models/listflagversionsfeatureflagsdirectionality.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |