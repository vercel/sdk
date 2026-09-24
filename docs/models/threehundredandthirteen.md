# ThreeHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirteen } from "@vercel/sdk/models/twohundredandeightythree.js";

let value: ThreeHundredAndThirteen = {
  deploymentId: "<id>",
  projectAccountId: "<id>",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `deploymentId`                                                                                                                      | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `projectAccountId`                                                                                                                  | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `projectId`                                                                                                                         | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `projectName`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `rollbackDescription`                                                                                                               | [models.RollbackDescription](../models/rollbackdescription.md)                                                                      | :heavy_minus_sign:                                                                                                                  | Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback. |