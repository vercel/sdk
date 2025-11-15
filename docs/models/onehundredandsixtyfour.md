# OneHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFour } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixtyFour = {
  appName: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `appName`                            | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `appId`                              | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `installationId`                     | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `before`                             | [models.Before](../models/before.md) | :heavy_minus_sign:                   | N/A                                  |
| `after`                              | [models.After](../models/after.md)   | :heavy_minus_sign:                   | N/A                                  |