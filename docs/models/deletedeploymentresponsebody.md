# DeleteDeploymentResponseBody

The deployment was successfully deleted

## Example Usage

```typescript
import { DeleteDeploymentResponseBody } from "@vercel/sdk/models/deletedeploymentop.js";

let value: DeleteDeploymentResponseBody = {
  state: "DELETED",
  uid: "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `state`                                                            | [models.DeleteDeploymentState](../models/deletedeploymentstate.md) | :heavy_check_mark:                                                 | A constant with the final state of the deployment.                 |                                                                    |
| `uid`                                                              | *string*                                                           | :heavy_check_mark:                                                 | The removed deployment ID.                                         | dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd                    |