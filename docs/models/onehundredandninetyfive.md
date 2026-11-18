# OneHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyFive } from "@vercel/sdk/models/onehundredandeightyfive.js";

let value: OneHundredAndNinetyFive = {
  configVersion: 6882.62,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `configChangeCount`                                  | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `configChanges`                                      | [models.ConfigChanges](../models/configchanges.md)[] | :heavy_minus_sign:                                   | N/A                                                  |
| `configVersion`                                      | *models.UserEventPayloadConfigVersion*               | :heavy_check_mark:                                   | N/A                                                  |