# GetResourcesNotification

The notification, if set, displayed to the user when viewing the resource in Vercel

## Example Usage

```typescript
import { GetResourcesNotification } from "@vercel/sdk/models/getresourcesop.js";

let value: GetResourcesNotification = {
  level: "info",
  title: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `level`                                                    | [models.GetResourcesLevel](../models/getresourceslevel.md) | :heavy_check_mark:                                         | N/A                                                        |
| `title`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `message`                                                  | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `href`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |