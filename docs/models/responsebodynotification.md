# ResponseBodyNotification

## Example Usage

```typescript
import { ResponseBodyNotification } from "@vercel/sdk/models/getconfigurationop.js";

let value: ResponseBodyNotification = {
  level: "info",
  title: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `level`                                                                                    | [models.GetConfigurationResponseBodyLevel](../models/getconfigurationresponsebodylevel.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `title`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `message`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `href`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |