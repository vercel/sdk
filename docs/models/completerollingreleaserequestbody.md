# CompleteRollingReleaseRequestBody

## Example Usage

```typescript
import { CompleteRollingReleaseRequestBody } from "@vercel/sdk/models/completerollingreleaseop.js";

let value: CompleteRollingReleaseRequestBody = {
  canaryDeploymentId: "<id>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `canaryDeploymentId`                        | *string*                                    | :heavy_check_mark:                          | The ID of the canary deployment to complete |