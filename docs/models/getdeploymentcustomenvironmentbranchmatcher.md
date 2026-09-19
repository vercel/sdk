# GetDeploymentCustomEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetDeploymentCustomEnvironmentBranchMatcher } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody216type.js";

let value: GetDeploymentCustomEnvironmentBranchMatcher = {
  pattern: "<value>",
  type: "endsWith",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The pattern to match against branch names                                                                                          |
| `type`                                                                                                                             | [models.GetDeploymentCustomEnvironmentDeploymentsResponseType](../models/getdeploymentcustomenvironmentdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                                 | The type of matching to perform                                                                                                    |