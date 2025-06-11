# CreateCheckMetrics

## Example Usage

```typescript
import { CreateCheckMetrics } from "@vercel/sdk/models/createcheckop.js";

let value: CreateCheckMetrics = {
  fcp: {
    value: 749.37,
    source: "web-vitals",
  },
  lcp: {
    value: 3135.32,
    source: "web-vitals",
  },
  cls: {
    value: 3796.87,
    source: "web-vitals",
  },
  tbt: {
    value: 1180.79,
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