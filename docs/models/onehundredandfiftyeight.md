# OneHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyEight } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previewDeploymentSuffix: null,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `projectId`               | *string*                  | :heavy_check_mark:        | N/A                       |
| `projectName`             | *string*                  | :heavy_check_mark:        | N/A                       |
| `previewDeploymentSuffix` | *string*                  | :heavy_check_mark:        | N/A                       |