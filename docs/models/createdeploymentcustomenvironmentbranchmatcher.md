# CreateDeploymentCustomEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { CreateDeploymentCustomEnvironmentBranchMatcher } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse2.js";

let value: CreateDeploymentCustomEnvironmentBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [models.CreateDeploymentCustomEnvironmentDeploymentsType](../models/createdeploymentcustomenvironmentdeploymentstype.md) | :heavy_check_mark:                                                                                                       | The type of matching to perform                                                                                          |
| `pattern`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The pattern to match against branch names                                                                                |