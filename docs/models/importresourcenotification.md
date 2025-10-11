# ImportResourceNotification

## Example Usage

```typescript
import { ImportResourceNotification } from "@vercel/sdk/models/importresourceop.js";

let value: ImportResourceNotification = {
  level: "error",
  title: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `level`                                                        | [models.ImportResourceLevel](../models/importresourcelevel.md) | :heavy_check_mark:                                             | N/A                                                            |
| `title`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `message`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `href`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |