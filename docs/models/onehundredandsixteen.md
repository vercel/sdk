# OneHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixteen } from "@vercel/sdk/models/job6.js";

let value: OneHundredAndSixteen = {
  projectId: "<id>",
  projectName: "<value>",
  configVersion: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectId`            | *string*               | :heavy_check_mark:     | N/A                    |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |
| `configVersion`        | *models.ConfigVersion* | :heavy_check_mark:     | N/A                    |