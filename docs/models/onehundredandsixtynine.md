# OneHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyNine } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixtyNine = {
  appName: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `appName`                                  | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `appId`                                    | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `resources`                                | [models.Resources](../models/resources.md) | :heavy_minus_sign:                         | N/A                                        |