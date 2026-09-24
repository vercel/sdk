# GetDeploymentCustomEnvironmentDeploymentsBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetDeploymentCustomEnvironmentDeploymentsBranchMatcher } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody219type.js";

let value: GetDeploymentCustomEnvironmentDeploymentsBranchMatcher = {
  pattern: "<value>",
  type: "endsWith",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The pattern to match against branch names                                                                                                |
| `type`                                                                                                                                   | [models.GetDeploymentCustomEnvironmentDeploymentsResponse200Type](../models/getdeploymentcustomenvironmentdeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                                       | The type of matching to perform                                                                                                          |