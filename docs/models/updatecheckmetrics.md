# UpdateCheckMetrics

## Example Usage

```typescript
import { UpdateCheckMetrics } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckMetrics = {
  fcp: {
    value: 5468.59,
    source: "web-vitals",
  },
  lcp: {
    value: 1319.71,
    source: "web-vitals",
  },
  cls: {
    value: 3110.66,
    source: "web-vitals",
  },
  tbt: {
    value: 4415.23,
    source: "web-vitals",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `fcp`                                                                                      | [models.UpdateCheckFCP](../models/updatecheckfcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `lcp`                                                                                      | [models.UpdateCheckLCP](../models/updatechecklcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `cls`                                                                                      | [models.UpdateCheckCLS](../models/updatecheckcls.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `tbt`                                                                                      | [models.UpdateCheckTBT](../models/updatechecktbt.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `virtualExperienceScore`                                                                   | [models.UpdateCheckVirtualExperienceScore](../models/updatecheckvirtualexperiencescore.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |