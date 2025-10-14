# UpdateResourceNotification

## Example Usage

```typescript
import { UpdateResourceNotification } from "@vercel/sdk/models/updateresourceop.js";

let value: UpdateResourceNotification = {
  level: "error",
  title: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `level`                                                        | [models.UpdateResourceLevel](../models/updateresourcelevel.md) | :heavy_check_mark:                                             | N/A                                                            |
| `title`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `message`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `href`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |