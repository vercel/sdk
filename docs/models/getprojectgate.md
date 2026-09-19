# GetProjectGate

Automated gating configuration. Omitted (the default) means no gating is configured, which is equivalent to `enabled: false`.

## Example Usage

```typescript
import { GetProjectGate } from "@vercel/sdk/models/getprojectfrom1.js";

let value: GetProjectGate = {
  action: "pause",
  checks: [],
  dryRun: false,
  enabled: false,
  failureThreshold: 3,
  windowSize: 5,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                           | [models.GetProjectProjectsResponse200Action](../models/getprojectprojectsresponse200action.md)                     | :heavy_check_mark:                                                                                                 | What to do when the gate trips: pause the rollout, or roll it back.                                                |                                                                                                                    |
| `checks`                                                                                                           | [models.GetProjectChecks](../models/getprojectchecks.md)[]                                                         | :heavy_check_mark:                                                                                                 | The checks to evaluate. An empty array means nothing is evaluated.                                                 |                                                                                                                    |
| `dryRun`                                                                                                           | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | When true, a tripped gate is only reported — {@link action} is not taken.                                          |                                                                                                                    |
| `enabled`                                                                                                          | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | Whether automated gating is enabled for this project's rollouts.                                                   |                                                                                                                    |
| `failureThreshold`                                                                                                 | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | How many failing evaluations within {@link windowSize} trip the gate. Defaults to `3` when omitted.                | 3                                                                                                                  |
| `windowSize`                                                                                                       | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | How many of the most recent evaluations {@link failureThreshold} is counted against. Defaults to `5` when omitted. | 5                                                                                                                  |