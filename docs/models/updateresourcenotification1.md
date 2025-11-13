# UpdateResourceNotification1

## Example Usage

```typescript
import { UpdateResourceNotification1 } from "@vercel/sdk/models/updateresourceop.js";

let value: UpdateResourceNotification1 = {
  level: "warn",
  title: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `level`                                                    | [models.NotificationLevel](../models/notificationlevel.md) | :heavy_check_mark:                                         | N/A                                                        |
| `title`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `message`                                                  | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `href`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |