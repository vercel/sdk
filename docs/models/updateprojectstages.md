# UpdateProjectStages

An array of all the stages required during a deployment release. each stage requires an approval before advancing to the next stage.

## Example Usage

```typescript
import { UpdateProjectStages } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectStages = {
  targetPercentage: 3302.67,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `targetPercentage`                                       | *number*                                                 | :heavy_check_mark:                                       | The percentage of traffic to serve to the new deployment |