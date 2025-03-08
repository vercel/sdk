# Stages

An array of all the stages required during a deployment release. each stage requires an approval before advancing to the next stage.

## Example Usage

```typescript
import { Stages } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: Stages = {
  targetPercentage: 6874.88,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `targetPercentage`                                       | *number*                                                 | :heavy_check_mark:                                       | The percentage of traffic to serve to the new deployment |