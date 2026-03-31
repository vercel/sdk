# OneHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeven } from "@vercel/sdk/models/usereventpayload96type.js";

let value: OneHundredAndSeven = {
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