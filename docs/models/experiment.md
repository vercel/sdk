# Experiment

## Example Usage

```typescript
import { Experiment } from "@vercel/sdk/models/flag.js";

let value: Experiment = {
  allocationUnit: "userId",
  primaryMetrics: [
    {
      name: "<value>",
      metricType: "count",
      metricUnit: "session",
      directionality: "increaseIsGood",
    },
  ],
  status: "running",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `id`                                                       | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `numVariants`                                              | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `surfaceArea`                                              | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `stickyRequirement`                                        | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `layer`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `guardrailMetrics`                                         | [models.GuardrailMetrics](../models/guardrailmetrics.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
| `hypothesis`                                               | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `device`                                                   | [models.Device](../models/device.md)                       | :heavy_minus_sign:                                         | N/A                                                        |
| `controlVariantId`                                         | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `startedAt`                                                | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `endedAt`                                                  | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `decision`                                                 | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `decisionReason`                                           | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `duration`                                                 | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `durationUnit`                                             | [models.DurationUnit](../models/durationunit.md)           | :heavy_minus_sign:                                         | N/A                                                        |
| `allocationPercent`                                        | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `allocationUnit`                                           | [models.AllocationUnit](../models/allocationunit.md)       | :heavy_check_mark:                                         | N/A                                                        |
| `primaryMetrics`                                           | [models.PrimaryMetrics](../models/primarymetrics.md)[]     | :heavy_check_mark:                                         | N/A                                                        |
| `status`                                                   | [models.FlagStatus](../models/flagstatus.md)               | :heavy_check_mark:                                         | N/A                                                        |