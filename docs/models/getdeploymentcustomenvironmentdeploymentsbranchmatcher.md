# GetDeploymentCustomEnvironmentDeploymentsBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetDeploymentCustomEnvironmentDeploymentsBranchMatcher } from "@vercel/sdk/models/getdeploymentop.js";

let value: GetDeploymentCustomEnvironmentDeploymentsBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                   | [models.GetDeploymentCustomEnvironmentDeploymentsResponse200Type](../models/getdeploymentcustomenvironmentdeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                                       | The type of matching to perform                                                                                                          |
| `pattern`                                                                                                                                | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The pattern to match against branch names                                                                                                |