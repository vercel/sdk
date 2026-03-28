# PrimaryMetrics

## Example Usage

```typescript
import { PrimaryMetrics } from "@vercel/sdk/models/flag.js";

let value: PrimaryMetrics = {
  name: "<value>",
  metricType: "count",
  metricUnit: "session",
  directionality: "increaseIsGood",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `metricFormula`                                              | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `metricType`                                                 | [models.FlagMetricType](../models/flagmetrictype.md)         | :heavy_check_mark:                                           | N/A                                                          |
| `metricUnit`                                                 | [models.FlagMetricUnit](../models/flagmetricunit.md)         | :heavy_check_mark:                                           | N/A                                                          |
| `directionality`                                             | [models.FlagDirectionality](../models/flagdirectionality.md) | :heavy_check_mark:                                           | N/A                                                          |