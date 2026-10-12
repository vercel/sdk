# PayloadUpdateDiff

## Example Usage

```typescript
import { PayloadUpdateDiff } from "@vercel/sdk/models/usereventjobcommitverification.js";

let value: PayloadUpdateDiff = {
  changedValue: true,
  id: "<id>",
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
| `newTarget`                                                         | [models.PayloadNewTarget](../models/payloadnewtarget.md)[]          | :heavy_minus_sign:                                                  | N/A                                                                 |
| `newType`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `oldCustomEnvironmentIds`                                           | *string*[]                                                          | :heavy_minus_sign:                                                  | N/A                                                                 |
| `oldTarget`                                                         | [models.PayloadOldTarget](../models/payloadoldtarget.md)[]          | :heavy_minus_sign:                                                  | N/A                                                                 |
| `oldType`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `newProjects`                                                       | [models.NewProjects](../models/newprojects.md)[]                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `oldProjects`                                                       | [models.OldProjects](../models/oldprojects.md)[]                    | :heavy_minus_sign:                                                  | N/A                                                                 |