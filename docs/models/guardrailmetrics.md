# GuardrailMetrics

## Example Usage

```typescript
import { GuardrailMetrics } from "@vercel/sdk/models/flag.js";

let value: GuardrailMetrics = {
  name: "<value>",
  metricType: "percentage",
  metricUnit: "user",
  directionality: "decreaseIsGood",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `description`                                        | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `metricFormula`                                      | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `metricType`                                         | [models.MetricType](../models/metrictype.md)         | :heavy_check_mark:                                   | N/A                                                  |
| `metricUnit`                                         | [models.MetricUnit](../models/metricunit.md)         | :heavy_check_mark:                                   | N/A                                                  |
| `directionality`                                     | [models.Directionality](../models/directionality.md) | :heavy_check_mark:                                   | N/A                                                  |