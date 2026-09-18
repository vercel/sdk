# TwoHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyOne } from "@vercel/sdk/models/trigger.js";

let value: TwoHundredAndSeventyOne = {
  previewDeploymentSuffix: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `previewDeploymentSuffix` | *string*                  | :heavy_check_mark:        | N/A                       |
| `projectId`               | *string*                  | :heavy_check_mark:        | N/A                       |
| `projectName`             | *string*                  | :heavy_check_mark:        | N/A                       |