# StartRollingReleaseRequestBody

## Example Usage

```typescript
import { StartRollingReleaseRequestBody } from "@vercel/sdk/models/startrollingreleaseop.js";

let value: StartRollingReleaseRequestBody = {
  canaryDeploymentId: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `canaryDeploymentId`                                             | *string*                                                         | :heavy_check_mark:                                               | The ID of the canary deployment to start the rolling release for |