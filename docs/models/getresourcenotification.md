# GetResourceNotification

The notification, if set, displayed to the user when viewing the resource in Vercel

## Example Usage

```typescript
import { GetResourceNotification } from "@vercel/sdk/models/getresourceop.js";

let value: GetResourceNotification = {
  level: "warn",
  title: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `level`                                                  | [models.GetResourceLevel](../models/getresourcelevel.md) | :heavy_check_mark:                                       | N/A                                                      |
| `title`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `message`                                                | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `href`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |