# OneHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyFive } from "@vercel/sdk/models/onehundredandfortyfour.js";

let value: OneHundredAndFortyFive = {
  configVersion: 5427.88,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `configVersion`                                      | *models.UserEventPayloadConfigVersion*               | :heavy_check_mark:                                   | N/A                                                  |
| `configChangeCount`                                  | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `configChanges`                                      | [models.ConfigChanges](../models/configchanges.md)[] | :heavy_minus_sign:                                   | N/A                                                  |