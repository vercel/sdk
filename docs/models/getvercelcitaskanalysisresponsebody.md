# GetVercelCiTaskAnalysisResponseBody

Current task analysis status.

## Example Usage

```typescript
import { GetVercelCiTaskAnalysisResponseBody } from "@vercel/sdk/models/getvercelcitaskanalysisop.js";

let value: GetVercelCiTaskAnalysisResponseBody = {
  analysisId: "<id>",
  status: "pending",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `analysisId`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `status`                                                                           | [models.GetVercelCiTaskAnalysisStatus](../models/getvercelcitaskanalysisstatus.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `failureReason`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |