# OneHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyFour } from "@vercel/sdk/models/usereventjobpayload1269githashtagvercel.js";

let value: OneHundredAndEightyFour = {
  configVersion: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `configChangeCount`                                  | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `configChanges`                                      | [models.ConfigChanges](../models/configchanges.md)[] | :heavy_minus_sign:                                   | N/A                                                  |
| `configVersion`                                      | *models.UserEventPayloadConfigVersion*               | :heavy_check_mark:                                   | N/A                                                  |