# GetProjectsStages

An array of all the stages required during a deployment release. each stage requires an approval before advancing to the next stage.

## Example Usage

```typescript
import { GetProjectsStages } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsStages = {
  targetPercentage: 4839.37,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `targetPercentage`                                                          | *number*                                                                    | :heavy_check_mark:                                                          | The percentage of traffic to serve to the new deployment                    |
| `requireApproval`                                                           | *boolean*                                                                   | :heavy_minus_sign:                                                          | Whether or not this stage requires approval to proceed.                     |
| `duration`                                                                  | *number*                                                                    | :heavy_minus_sign:                                                          | duration is the total time to serve a stage, at the given targetPercentage. |