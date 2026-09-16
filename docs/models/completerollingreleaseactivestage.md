# CompleteRollingReleaseActiveStage

The currently active stage, null if the rollout is aborted

## Example Usage

```typescript
import { CompleteRollingReleaseActiveStage } from "@vercel/sdk/models/completerollingreleaseop.js";

let value: CompleteRollingReleaseActiveStage = {
  duration: null,
  index: 1,
  isFinalStage: false,
  requireApproval: true,
  targetPercentage: 25,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `duration`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | Duration in seconds for automatic advancement, null for manual stages or the final stage | null                                                                                     |
| `index`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | The zero-based index of the stage                                                        | 0                                                                                        |
| `isFinalStage`                                                                           | *boolean*                                                                                | :heavy_check_mark:                                                                       | Whether or not this stage is the final stage (targetPercentage === 100)                  | false                                                                                    |
| `linearShift`                                                                            | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Whether to linearly shift traffic over the duration of this stage                        | false                                                                                    |
| `requireApproval`                                                                        | *boolean*                                                                                | :heavy_check_mark:                                                                       | Whether or not this stage requires manual approval to proceed                            |                                                                                          |
| `targetPercentage`                                                                       | *number*                                                                                 | :heavy_check_mark:                                                                       | The percentage of traffic to serve to the canary deployment (0-100)                      | 25                                                                                       |