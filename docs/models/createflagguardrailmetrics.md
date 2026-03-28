# CreateFlagGuardrailMetrics

## Example Usage

```typescript
import { CreateFlagGuardrailMetrics } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagGuardrailMetrics = {
  name: "<value>",
  metricType: "count",
  metricUnit: "session",
  directionality: "increaseIsGood",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metricFormula`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `metricType`                                                             | [models.CreateFlagMetricType](../models/createflagmetrictype.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `metricUnit`                                                             | [models.CreateFlagMetricUnit](../models/createflagmetricunit.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `directionality`                                                         | [models.CreateFlagDirectionality](../models/createflagdirectionality.md) | :heavy_check_mark:                                                       | N/A                                                                      |