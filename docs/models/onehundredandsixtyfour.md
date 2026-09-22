# OneHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFour } from "@vercel/sdk/models/onehundredandfiftyfive.js";

let value: OneHundredAndSixtyFour = {
  configVersion: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `configChangeCount`                                  | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `configChanges`                                      | [models.ConfigChanges](../models/configchanges.md)[] | :heavy_minus_sign:                                   | N/A                                                  |
| `configVersion`                                      | *models.UserEventPayloadConfigVersion*               | :heavy_check_mark:                                   | N/A                                                  |