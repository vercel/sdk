# UpdateDiff

## Example Usage

```typescript
import { UpdateDiff } from "@vercel/sdk/models/job4.js";

let value: UpdateDiff = {
  changedValue: false,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `changedComment`                                                    | *boolean*                                                           | :heavy_minus_sign:                                                  | N/A                                                                 |
| `changedGitBranch`                                                  | *boolean*                                                           | :heavy_minus_sign:                                                  | N/A                                                                 |
| `changedValue`                                                      | *boolean*                                                           | :heavy_check_mark:                                                  | Indicates a value was submitted, not whether its plaintext changed. |
| `key`                                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `newCustomEnvironmentIds`                                           | *string*[]                                                          | :heavy_minus_sign:                                                  | N/A                                                                 |
| `newKey`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `newTarget`                                                         | [models.NewTarget](../models/newtarget.md)[]                        | :heavy_minus_sign:                                                  | N/A                                                                 |
| `newType`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `oldCustomEnvironmentIds`                                           | *string*[]                                                          | :heavy_minus_sign:                                                  | N/A                                                                 |
| `oldTarget`                                                         | [models.OldTarget](../models/oldtarget.md)[]                        | :heavy_minus_sign:                                                  | N/A                                                                 |
| `oldType`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |