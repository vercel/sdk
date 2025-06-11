# GetCheckMetrics

## Example Usage

```typescript
import { GetCheckMetrics } from "@vercel/sdk/models/getcheckop.js";

let value: GetCheckMetrics = {
  fcp: {
    value: 8285.04,
    source: "web-vitals",
  },
  lcp: {
    value: 4162.19,
    source: "web-vitals",
  },
  cls: {
    value: 2699.45,
    source: "web-vitals",
  },
  tbt: {
    value: 5264.89,
    source: "web-vitals",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `fcp`                                                                                | [models.GetCheckFCP](../models/getcheckfcp.md)                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `lcp`                                                                                | [models.GetCheckLCP](../models/getchecklcp.md)                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `cls`                                                                                | [models.GetCheckCLS](../models/getcheckcls.md)                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `tbt`                                                                                | [models.GetCheckTBT](../models/getchecktbt.md)                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `virtualExperienceScore`                                                             | [models.GetCheckVirtualExperienceScore](../models/getcheckvirtualexperiencescore.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |