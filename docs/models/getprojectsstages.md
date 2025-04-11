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

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `targetPercentage`                                       | *number*                                                 | :heavy_check_mark:                                       | The percentage of traffic to serve to the new deployment |