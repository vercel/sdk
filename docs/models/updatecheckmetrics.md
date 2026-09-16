# UpdateCheckMetrics

## Example Usage

```typescript
import { UpdateCheckMetrics } from "@vercel/sdk/models/updatecheckop.js";

let value: UpdateCheckMetrics = {
  cls: {
    source: "web-vitals",
    value: 1319.71,
  },
  fcp: {
    source: "web-vitals",
    value: 4415.23,
  },
  lcp: {
    source: "web-vitals",
    value: 4556.81,
  },
  tbt: {
    source: "web-vitals",
    value: 285.9,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `cls`                                                                                      | [models.UpdateCheckCLS](../models/updatecheckcls.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `fcp`                                                                                      | [models.UpdateCheckFCP](../models/updatecheckfcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `lcp`                                                                                      | [models.UpdateCheckLCP](../models/updatechecklcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `tbt`                                                                                      | [models.UpdateCheckTBT](../models/updatechecktbt.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `virtualExperienceScore`                                                                   | [models.UpdateCheckVirtualExperienceScore](../models/updatecheckvirtualexperiencescore.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |