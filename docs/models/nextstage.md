# NextStage

The next stage to be activated, null if not in ACTIVE state

## Example Usage

```typescript
import { NextStage } from "@vercel/sdk/models/getrollingreleaseop.js";

let value: NextStage = {
  duration: null,
  index: 2,
  isFinalStage: false,
  requireApproval: true,
  targetPercentage: 60,
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