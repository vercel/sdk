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

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `appName`                                  | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `appId`                                    | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `resources`                                | [models.Resources](../models/resources.md) | :heavy_minus_sign:                         | N/A                                        |