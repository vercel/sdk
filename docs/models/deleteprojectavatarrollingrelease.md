# DeleteProjectAvatarRollingRelease

Project-level rolling release configuration that defines how deployments should be gradually rolled out

## Example Usage

```typescript
import { DeleteProjectAvatarRollingRelease } from "@vercel/sdk/models/deleteprojectavatarresponsebody.js";

let value: DeleteProjectAvatarRollingRelease = {
  canaryResponseHeader: false,
  gate: {
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
    dryRun: true,
    enabled: true,
    failureThreshold: 3,
    windowSize: 5,
  },
  stages: [
    {
      duration: 600,
      linearShift: false,
      requireApproval: false,
      targetPercentage: 25,
    },
  ],
  target: "production",
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            | Example                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `canaryResponseHeader`                                                                                                                                                                 | *boolean*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                     | Whether the request served by a canary deployment should return a header indicating a canary was served. Defaults to `false` when omitted.                                             | false                                                                                                                                                                                  |
| `gate`                                                                                                                                                                                 | [models.DeleteProjectAvatarGate](../models/deleteprojectavatargate.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                     | Automated gating configuration. Omitted (the default) means no gating is configured, which is equivalent to `enabled: false`.                                                          |                                                                                                                                                                                        |
| `stages`                                                                                                                                                                               | [models.DeleteProjectAvatarStages](../models/deleteprojectavatarstages.md)[]                                                                                                           | :heavy_minus_sign:                                                                                                                                                                     | An array of all the stages required during a deployment release. Each stage defines a target percentage and advancement rules. The final stage must always have targetPercentage: 100. |                                                                                                                                                                                        |
| `target`                                                                                                                                                                               | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The environment that the release targets, currently only supports production. Adding in case we want to configure with alias groups or custom environments.                            | production                                                                                                                                                                             |