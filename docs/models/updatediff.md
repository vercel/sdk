# UpdateDiff

## Example Usage

```typescript
import { UpdateDiff } from "@vercel/sdk/models/userevent.js";

let value: UpdateDiff = {
  id: "<id>",
  changedValue: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `key`                                            | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `newKey`                                         | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `oldTarget`                                      | [models.OldTarget](../models/oldtarget.md)[]     | :heavy_minus_sign:                               | N/A                                              |
| `newTarget`                                      | [models.NewTarget](../models/newtarget.md)[]     | :heavy_minus_sign:                               | N/A                                              |
| `oldType`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `newType`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `oldProjects`                                    | [models.OldProjects](../models/oldprojects.md)[] | :heavy_minus_sign:                               | N/A                                              |
| `newProjects`                                    | [models.NewProjects](../models/newprojects.md)[] | :heavy_minus_sign:                               | N/A                                              |
| `changedValue`                                   | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |