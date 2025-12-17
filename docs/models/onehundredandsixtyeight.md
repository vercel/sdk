# OneHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyEight } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixtyEight = {
  appName: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `appName`                                  | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `appId`                                    | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `resources`                                | [models.Resources](../models/resources.md) | :heavy_minus_sign:                         | N/A                                        |