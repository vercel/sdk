# GetProjectRollingRelease

Project-level rolling release configuration that defines how deployments should be gradually rolled out

## Example Usage

```typescript
import { GetProjectRollingRelease } from "@vercel/sdk/models/getprojectfrom2.js";

let value: GetProjectRollingRelease = {
  canaryResponseHeader: false,
  gate: {
    action: "rollback",
    checks: [],
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
| `gate`                                                                                                                                                                                 | [models.GetProjectGate](../models/getprojectgate.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                     | Automated gating configuration. Omitted (the default) means no gating is configured, which is equivalent to `enabled: false`.                                                          |                                                                                                                                                                                        |
| `stages`                                                                                                                                                                               | [models.GetProjectStages](../models/getprojectstages.md)[]                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                     | An array of all the stages required during a deployment release. Each stage defines a target percentage and advancement rules. The final stage must always have targetPercentage: 100. |                                                                                                                                                                                        |
| `target`                                                                                                                                                                               | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The environment that the release targets, currently only supports production. Adding in case we want to configure with alias groups or custom environments.                            | production                                                                                                                                                                             |