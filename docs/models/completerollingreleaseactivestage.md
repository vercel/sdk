# CompleteRollingReleaseActiveStage

The currently active stage, null if the rollout is aborted

## Example Usage

```typescript
import { CompleteRollingReleaseActiveStage } from "@vercel/sdk/models/completerollingreleaseop.js";

let value: CompleteRollingReleaseActiveStage = {
  index: 1,
  isFinalStage: false,
  targetPercentage: 25,
  requireApproval: true,
  duration: null,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `index`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | The zero-based index of the stage                                                        | 0                                                                                        |
| `isFinalStage`                                                                           | *boolean*                                                                                | :heavy_check_mark:                                                                       | Whether or not this stage is the final stage (targetPercentage === 100)                  | false                                                                                    |
| `targetPercentage`                                                                       | *number*                                                                                 | :heavy_check_mark:                                                                       | The percentage of traffic to serve to the canary deployment (0-100)                      | 25                                                                                       |
| `requireApproval`                                                                        | *boolean*                                                                                | :heavy_check_mark:                                                                       | Whether or not this stage requires manual approval to proceed                            |                                                                                          |
| `duration`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | Duration in seconds for automatic advancement, null for manual stages or the final stage | <nil>                                                                                    |