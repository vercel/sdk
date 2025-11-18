# OneHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFive } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixtyFive = {
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