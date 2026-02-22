# GetProjectsResponseBodyProjectsStages

An array of all the stages required during a deployment release. Each stage defines a target percentage and advancement rules. The final stage must always have targetPercentage: 100.

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsStages } from "@vercel/sdk/models/getprojectsrouteprojectsresponse200applicationjsonresponsebodymitigate.js";

let value: GetProjectsResponseBodyProjectsStages = {
  targetPercentage: 25,
  requireApproval: false,
  duration: 600,
  linearShift: false,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `targetPercentage`                                                  | *number*                                                            | :heavy_check_mark:                                                  | The percentage of traffic to serve to the canary deployment (0-100) | 25                                                                  |
| `requireApproval`                                                   | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether or not this stage requires manual approval to proceed       | false                                                               |
| `duration`                                                          | *number*                                                            | :heavy_minus_sign:                                                  | Duration in minutes for automatic advancement to the next stage     | 600                                                                 |
| `linearShift`                                                       | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether to linearly shift traffic over the duration of this stage   | false                                                               |