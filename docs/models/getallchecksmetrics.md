# GetAllChecksMetrics

## Example Usage

```typescript
import { GetAllChecksMetrics } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksMetrics = {
  fcp: {
    value: 8959.82,
    source: "web-vitals",
  },
  lcp: {
    value: 7453.23,
    source: "web-vitals",
  },
  cls: {
    value: 7049.83,
    source: "web-vitals",
  },
  tbt: {
    value: 8322.83,
    source: "web-vitals",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `fcp`                                                                                        | [models.GetAllChecksFCP](../models/getallchecksfcp.md)                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `lcp`                                                                                        | [models.GetAllChecksLCP](../models/getallcheckslcp.md)                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `cls`                                                                                        | [models.GetAllChecksCLS](../models/getallcheckscls.md)                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `tbt`                                                                                        | [models.GetAllChecksTBT](../models/getallcheckstbt.md)                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `virtualExperienceScore`                                                                     | [models.GetAllChecksVirtualExperienceScore](../models/getallchecksvirtualexperiencescore.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |