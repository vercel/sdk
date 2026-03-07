# GetDeploymentCustomEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetDeploymentCustomEnvironmentBranchMatcher } from "@vercel/sdk/models/responsebodyorigin.js";

let value: GetDeploymentCustomEnvironmentBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                   | [models.GetDeploymentCustomEnvironmentDeploymentsResponse200Type](../models/getdeploymentcustomenvironmentdeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                                       | The type of matching to perform                                                                                                          |
| `pattern`                                                                                                                                | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The pattern to match against branch names                                                                                                |