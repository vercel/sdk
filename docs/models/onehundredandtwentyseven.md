# OneHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwentySeven = {
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