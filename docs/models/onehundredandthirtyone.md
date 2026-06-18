# OneHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyOne } from "@vercel/sdk/models/onehundredandeight.js";

let value: OneHundredAndThirtyOne = {
  projectId: "<id>",
  projectName: "<value>",
  configVersion: 9852.65,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectId`            | *string*               | :heavy_check_mark:     | N/A                    |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |
| `configVersion`        | *models.ConfigVersion* | :heavy_check_mark:     | N/A                    |