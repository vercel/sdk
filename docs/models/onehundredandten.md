# OneHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTen } from "@vercel/sdk/models/newprojects.js";

let value: OneHundredAndTen = {
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