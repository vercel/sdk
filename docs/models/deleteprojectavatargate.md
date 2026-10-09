# DeleteProjectAvatarGate

Automated gating configuration. Omitted (the default) means no gating is configured, which is equivalent to `enabled: false`.

## Example Usage

```typescript
import { DeleteProjectAvatarGate } from "@vercel/sdk/models/deleteprojectavatarresponsebody.js";

let value: DeleteProjectAvatarGate = {
  action: "pause",
  checks: [
    {
      excludePaths: [
        "/api/health",
      ],
      excludeStatusCodes: [
        503,
      ],
      ingestWatermarkSeconds: 30,
      significanceLevel: 0.05,
      type: "error-rate-5xx",
    },
  ],
  dryRun: false,
  enabled: false,
  failureThreshold: 3,
  windowSize: 5,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                           | [models.DeleteProjectAvatarProjectsAction](../models/deleteprojectavatarprojectsaction.md)                         | :heavy_check_mark:                                                                                                 | What to do when the gate trips: pause the rollout, or roll it back.                                                |                                                                                                                    |
| `checks`                                                                                                           | [models.DeleteProjectAvatarChecks](../models/deleteprojectavatarchecks.md)[]                                       | :heavy_check_mark:                                                                                                 | The checks to evaluate. An empty array means nothing is evaluated.                                                 |                                                                                                                    |
| `dryRun`                                                                                                           | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | When true, a tripped gate is only reported — {@link action} is not taken.                                          |                                                                                                                    |
| `enabled`                                                                                                          | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | Whether automated gating is enabled for this project's rollouts.                                                   |                                                                                                                    |
| `failureThreshold`                                                                                                 | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | How many failing evaluations within {@link windowSize} trip the gate. Defaults to `3` when omitted.                | 3                                                                                                                  |
| `windowSize`                                                                                                       | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | How many of the most recent evaluations {@link failureThreshold} is counted against. Defaults to `5` when omitted. | 5                                                                                                                  |