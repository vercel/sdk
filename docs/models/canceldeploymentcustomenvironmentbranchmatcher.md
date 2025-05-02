# CancelDeploymentCustomEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { CancelDeploymentCustomEnvironmentBranchMatcher } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentCustomEnvironmentBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [models.CancelDeploymentCustomEnvironmentDeploymentsType](../models/canceldeploymentcustomenvironmentdeploymentstype.md) | :heavy_check_mark:                                                                                                       | The type of matching to perform                                                                                          |
| `pattern`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The pattern to match against branch names                                                                                |