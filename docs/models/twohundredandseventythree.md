# TwoHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyThree } from "@vercel/sdk/models/twohundredandeleven.js";

let value: TwoHundredAndSeventyThree = {
  projectId: "<id>",
  projectName: "<value>",
  projectAccountId: "<id>",
  deploymentId: "<id>",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                                         | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `projectName`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `projectAccountId`                                                                                                                  | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `deploymentId`                                                                                                                      | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `rollbackDescription`                                                                                                               | [models.RollbackDescription](../models/rollbackdescription.md)                                                                      | :heavy_minus_sign:                                                                                                                  | Description of why a project was rolled back, and by whom. Note that lastAliasRequest contains the from/to details of the rollback. |