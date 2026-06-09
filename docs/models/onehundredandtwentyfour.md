# OneHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyFour } from "@vercel/sdk/models/ninetyfour.js";

let value: OneHundredAndTwentyFour = {
  projectId: "<id>",
  projectName: "<value>",
  configVersion: 783.03,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectId`            | *string*               | :heavy_check_mark:     | N/A                    |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |
| `configVersion`        | *models.ConfigVersion* | :heavy_check_mark:     | N/A                    |