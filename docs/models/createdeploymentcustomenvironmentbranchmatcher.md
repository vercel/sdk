# CreateDeploymentCustomEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { CreateDeploymentCustomEnvironmentBranchMatcher } from "@vercel/sdk/models/createdeploymentgitsource1.js";

let value: CreateDeploymentCustomEnvironmentBranchMatcher = {
  pattern: "<value>",
  type: "endsWith",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `pattern`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The pattern to match against branch names                                                                                |
| `type`                                                                                                                   | [models.CreateDeploymentCustomEnvironmentDeploymentsType](../models/createdeploymentcustomenvironmentdeploymentstype.md) | :heavy_check_mark:                                                                                                       | The type of matching to perform                                                                                          |