# ApproveRollingReleaseStageRequestBody

## Example Usage

```typescript
import { ApproveRollingReleaseStageRequestBody } from "@vercel/sdk/models/approverollingreleasestageop.js";

let value: ApproveRollingReleaseStageRequestBody = {
  nextStageIndex: 8238.52,
  canaryDeploymentId: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `nextStageIndex`                                              | *number*                                                      | :heavy_check_mark:                                            | The index of the stage to transition to                       |
| `canaryDeploymentId`                                          | *string*                                                      | :heavy_check_mark:                                            | The id of the canary deployment to approve for the next stage |