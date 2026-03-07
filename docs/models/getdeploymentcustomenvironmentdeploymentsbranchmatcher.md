# GetDeploymentCustomEnvironmentDeploymentsBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetDeploymentCustomEnvironmentDeploymentsBranchMatcher } from "@vercel/sdk/models/responsebodyorigin.js";

let value: GetDeploymentCustomEnvironmentDeploymentsBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [models.GetDeploymentCustomEnvironmentDeploymentsResponseType](../models/getdeploymentcustomenvironmentdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                                 | The type of matching to perform                                                                                                    |
| `pattern`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The pattern to match against branch names                                                                                          |