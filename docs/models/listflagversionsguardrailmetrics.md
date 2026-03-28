# ListFlagVersionsGuardrailMetrics

## Example Usage

```typescript
import { ListFlagVersionsGuardrailMetrics } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsGuardrailMetrics = {
  name: "<value>",
  metricType: "count",
  metricUnit: "user",
  directionality: "decreaseIsGood",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `metricFormula`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `metricType`                                                                         | [models.ListFlagVersionsMetricType](../models/listflagversionsmetrictype.md)         | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `metricUnit`                                                                         | [models.ListFlagVersionsMetricUnit](../models/listflagversionsmetricunit.md)         | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `directionality`                                                                     | [models.ListFlagVersionsDirectionality](../models/listflagversionsdirectionality.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |