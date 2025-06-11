# ResponseBodyStages

A stage object configured for a rolling release once a new deployment is triggered the first stage will be read in the proxy for first time visitors, and if a RNG < targetPercentage then it will serve the new deployment. Upon approval the next stage will be read, etc.

## Example Usage

```typescript
import { ResponseBodyStages } from "@vercel/sdk/models/updaterollingreleaseconfigop.js";

let value: ResponseBodyStages = {
  targetPercentage: 25,
  requireApproval: false,
  duration: 600,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `targetPercentage`                                                  | *number*                                                            | :heavy_check_mark:                                                  | The percentage of traffic to serve to the canary deployment (0-100) | 25                                                                  |
| `requireApproval`                                                   | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether or not this stage requires manual approval to proceed       | false                                                               |
| `duration`                                                          | *number*                                                            | :heavy_minus_sign:                                                  | Duration in minutes for automatic advancement to the next stage     | 600                                                                 |