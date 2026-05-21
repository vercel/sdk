# OneHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventeen } from "@vercel/sdk/models/usereventpayload80deployment.js";

let value: OneHundredAndSeventeen = {
  projectId: "<id>",
  projectName: "<value>",
  configVersion: 4642.56,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectId`            | *string*               | :heavy_check_mark:     | N/A                    |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |
| `configVersion`        | *models.ConfigVersion* | :heavy_check_mark:     | N/A                    |