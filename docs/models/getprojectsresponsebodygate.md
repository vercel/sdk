# GetProjectsResponseBodyGate

Automated gating configuration. Omitted (the default) means no gating is configured, which is equivalent to `enabled: false`.

## Example Usage

```typescript
import { GetProjectsResponseBodyGate } from "@vercel/sdk/models/getprojectstoprojectsresponse200applicationjsonresponsebody2preset.js";

let value: GetProjectsResponseBodyGate = {
  enabled: false,
  checks: [
    {
      type: "error-rate-5xx",
      minSampleSize: 100,
      excludeStatusCodes: [
        503,
      ],
      excludePaths: [
        "/api/health",
      ],
      ingestWatermarkSeconds: 30,
    },
  ],
  failureThreshold: 3,
  windowSize: 5,
  action: "pause",
  dryRun: false,
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              | Example                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                                | *boolean*                                                                                                                                                | :heavy_check_mark:                                                                                                                                       | Whether automated gating is enabled for this project's rollouts.                                                                                         |                                                                                                                                                          |
| `checks`                                                                                                                                                 | [models.GetProjectsResponseBodyProjectsChecks](../models/getprojectsresponsebodyprojectschecks.md)[]                                                     | :heavy_check_mark:                                                                                                                                       | The checks to evaluate. An empty array means nothing is evaluated.                                                                                       |                                                                                                                                                          |
| `failureThreshold`                                                                                                                                       | *number*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | How many failing evaluations within {@link windowSize} trip the gate. Defaults to `3` when omitted.                                                      | 3                                                                                                                                                        |
| `windowSize`                                                                                                                                             | *number*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | How many of the most recent evaluations {@link failureThreshold} is counted against. Defaults to `5` when omitted.                                       | 5                                                                                                                                                        |
| `action`                                                                                                                                                 | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson2Action](../models/getprojectsresponsebodyprojectsresponse200applicationjson2action.md) | :heavy_check_mark:                                                                                                                                       | What to do when the gate trips: pause the rollout, or roll it back.                                                                                      |                                                                                                                                                          |
| `dryRun`                                                                                                                                                 | *boolean*                                                                                                                                                | :heavy_check_mark:                                                                                                                                       | When true, a tripped gate is only reported — {@link action} is not taken.                                                                                |                                                                                                                                                          |