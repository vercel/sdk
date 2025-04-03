# CreateCheckMetrics

## Example Usage

```typescript
import { CreateCheckMetrics } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckMetrics = {
  fcp: {
    value: 2961.4,
    source: "web-vitals",
  },
  lcp: {
    value: 1187.27,
    source: "web-vitals",
  },
  cls: {
    value: 3179.83,
    source: "web-vitals",
  },
  tbt: {
    value: 4142.63,
    source: "web-vitals",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `fcp`                                                                                      | [models.CreateCheckFCP](../models/createcheckfcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `lcp`                                                                                      | [models.CreateCheckLCP](../models/createchecklcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `cls`                                                                                      | [models.CreateCheckCLS](../models/createcheckcls.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `tbt`                                                                                      | [models.CreateCheckTBT](../models/createchecktbt.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `virtualExperienceScore`                                                                   | [models.CreateCheckVirtualExperienceScore](../models/createcheckvirtualexperiencescore.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |