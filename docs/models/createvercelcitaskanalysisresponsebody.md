# CreateVercelCiTaskAnalysisResponseBody

Task analysis was accepted.

## Example Usage

```typescript
import { CreateVercelCiTaskAnalysisResponseBody } from "@vercel/sdk/models/createvercelcitaskanalysisop.js";

let value: CreateVercelCiTaskAnalysisResponseBody = {
  analysisId: "<id>",
  status: "completed",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `analysisId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [models.CreateVercelCiTaskAnalysisStatus](../models/createvercelcitaskanalysisstatus.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |