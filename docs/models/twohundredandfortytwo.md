# TwoHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyTwo } from "@vercel/sdk/models/envid.js";

let value: TwoHundredAndFortyTwo = {
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