# GetDeploymentCustomEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetDeploymentCustomEnvironmentBranchMatcher } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentCustomEnvironmentBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [models.GetDeploymentCustomEnvironmentDeploymentsResponseType](../models/getdeploymentcustomenvironmentdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                                 | The type of matching to perform                                                                                                    |
| `pattern`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The pattern to match against branch names                                                                                          |