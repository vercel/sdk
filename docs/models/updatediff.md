# UpdateDiff

## Example Usage

```typescript
import { UpdateDiff } from "@vercel/sdk/models/onehundredandfiftyfive.js";

let value: UpdateDiff = {
  changedValue: false,
  id: "<id>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `changedValue`                                   | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `key`                                            | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `newCustomEnvironmentIds`                        | *string*[]                                       | :heavy_minus_sign:                               | N/A                                              |
| `newKey`                                         | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `newProjects`                                    | [models.NewProjects](../models/newprojects.md)[] | :heavy_minus_sign:                               | N/A                                              |
| `newTarget`                                      | [models.NewTarget](../models/newtarget.md)[]     | :heavy_minus_sign:                               | N/A                                              |
| `newType`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `oldCustomEnvironmentIds`                        | *string*[]                                       | :heavy_minus_sign:                               | N/A                                              |
| `oldProjects`                                    | [models.OldProjects](../models/oldprojects.md)[] | :heavy_minus_sign:                               | N/A                                              |
| `oldTarget`                                      | [models.OldTarget](../models/oldtarget.md)[]     | :heavy_minus_sign:                               | N/A                                              |
| `oldType`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |