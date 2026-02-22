# OneHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentySix } from "@vercel/sdk/models/projectanalytics.js";

let value: OneHundredAndTwentySix = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentSuffix: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `projectId`               | *string*                  | :heavy_check_mark:        | N/A                       |
| `projectName`             | *string*                  | :heavy_check_mark:        | N/A                       |
| `previewDeploymentSuffix` | *string*                  | :heavy_check_mark:        | N/A                       |