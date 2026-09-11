# OneHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyNine } from "@vercel/sdk/models/deleteduser.js";

let value: OneHundredAndFiftyNine = {
  configVersion: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `configVersion`                                      | *models.UserEventPayloadConfigVersion*               | :heavy_check_mark:                                   | N/A                                                  |
| `configChangeCount`                                  | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `configChanges`                                      | [models.ConfigChanges](../models/configchanges.md)[] | :heavy_minus_sign:                                   | N/A                                                  |