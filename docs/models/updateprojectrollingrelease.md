# UpdateProjectRollingRelease

Project-level rolling release configuration that defines how deployments should be gradually rolled out

## Example Usage

```typescript
import { UpdateProjectRollingRelease } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectRollingRelease = {
  target: "production",
  stages: [
    {
      targetPercentage: 25,
      requireApproval: false,
      duration: 600,
      linearShift: false,
    },
  ],
  canaryResponseHeader: false,
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            | Example                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target`                                                                                                                                                                               | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The environment that the release targets, currently only supports production. Adding in case we want to configure with alias groups or custom environments.                            | production                                                                                                                                                                             |
| `stages`                                                                                                                                                                               | [models.UpdateProjectStages](../models/updateprojectstages.md)[]                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                     | An array of all the stages required during a deployment release. Each stage defines a target percentage and advancement rules. The final stage must always have targetPercentage: 100. |                                                                                                                                                                                        |
| `canaryResponseHeader`                                                                                                                                                                 | *boolean*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                     | Whether the request served by a canary deployment should return a header indicating a canary was served. Defaults to `false` when omitted.                                             | false                                                                                                                                                                                  |