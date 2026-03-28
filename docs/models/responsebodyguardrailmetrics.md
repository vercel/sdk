# ResponseBodyGuardrailMetrics

## Example Usage

```typescript
import { ResponseBodyGuardrailMetrics } from "@vercel/sdk/models/updateflagop.js";

let value: ResponseBodyGuardrailMetrics = {
  name: "<value>",
  metricType: "percentage",
  metricUnit: "session",
  directionality: "decreaseIsGood",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `description`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `metricFormula`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `metricType`                                                                 | [models.ResponseBodyMetricType](../models/responsebodymetrictype.md)         | :heavy_check_mark:                                                           | N/A                                                                          |
| `metricUnit`                                                                 | [models.ResponseBodyMetricUnit](../models/responsebodymetricunit.md)         | :heavy_check_mark:                                                           | N/A                                                                          |
| `directionality`                                                             | [models.ResponseBodyDirectionality](../models/responsebodydirectionality.md) | :heavy_check_mark:                                                           | N/A                                                                          |