# GetCheckMetrics

## Example Usage

```typescript
import { GetCheckMetrics } from "@vercel/sdk/models/getcheckop.js";

let value: GetCheckMetrics = {
  cls: {
    source: "web-vitals",
    value: 8285.04,
  },
  fcp: {
    source: "web-vitals",
    value: 4162.19,
  },
  lcp: {
    source: "web-vitals",
    value: 2699.45,
  },
  tbt: {
    source: "web-vitals",
    value: 5264.89,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `cls`                                                                                | [models.GetCheckCLS](../models/getcheckcls.md)                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `fcp`                                                                                | [models.GetCheckFCP](../models/getcheckfcp.md)                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `lcp`                                                                                | [models.GetCheckLCP](../models/getchecklcp.md)                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `tbt`                                                                                | [models.GetCheckTBT](../models/getchecktbt.md)                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `virtualExperienceScore`                                                             | [models.GetCheckVirtualExperienceScore](../models/getcheckvirtualexperiencescore.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |