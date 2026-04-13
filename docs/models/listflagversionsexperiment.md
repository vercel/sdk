# ListFlagVersionsExperiment

## Example Usage

```typescript
import { ListFlagVersionsExperiment } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsExperiment = {
  allocationUnit: "visitorId",
  primaryMetrics: [
    {
      name: "<value>",
      metricType: "percentage",
      metricUnit: "session",
      directionality: "decreaseIsGood",
    },
  ],
  status: "draft",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `numVariants`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `surfaceArea`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `stickyRequirement`                                                                        | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `layer`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `guardrailMetrics`                                                                         | [models.ListFlagVersionsGuardrailMetrics](../models/listflagversionsguardrailmetrics.md)[] | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `hypothesis`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `device`                                                                                   | [models.ListFlagVersionsDevice](../models/listflagversionsdevice.md)                       | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `controlVariantId`                                                                         | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `startedAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `endedAt`                                                                                  | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `decision`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `decisionReason`                                                                           | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `duration`                                                                                 | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `durationUnit`                                                                             | [models.ListFlagVersionsDurationUnit](../models/listflagversionsdurationunit.md)           | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `allocationPercent`                                                                        | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `allocationUnit`                                                                           | [models.ListFlagVersionsAllocationUnit](../models/listflagversionsallocationunit.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `primaryMetrics`                                                                           | [models.ListFlagVersionsPrimaryMetrics](../models/listflagversionsprimarymetrics.md)[]     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [models.ListFlagVersionsStatus](../models/listflagversionsstatus.md)                       | :heavy_check_mark:                                                                         | N/A                                                                                        |