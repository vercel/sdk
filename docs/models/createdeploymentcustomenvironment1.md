# CreateDeploymentCustomEnvironment1

If the deployment was created using a Custom Environment, then this property contains information regarding the environment used.

## Example Usage

```typescript
import { CreateDeploymentCustomEnvironment1 } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse2.js";

let value: CreateDeploymentCustomEnvironment1 = {
  id: "<id>",
  slug: "<value>",
  type: "preview",
  createdAt: 399.78,
  updatedAt: 4286.96,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Unique identifier for the custom environment (format: env_*)                                                         |
| `slug`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | URL-friendly name of the environment                                                                                 |
| `type`                                                                                                               | [models.CreateDeploymentCustomEnvironmentType](../models/createdeploymentcustomenvironmenttype.md)                   | :heavy_check_mark:                                                                                                   | The type of environment (production, preview, or development)                                                        |
| `description`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Optional description of the environment's purpose                                                                    |
| `branchMatcher`                                                                                                      | [models.CreateDeploymentCustomEnvironmentBranchMatcher](../models/createdeploymentcustomenvironmentbranchmatcher.md) | :heavy_minus_sign:                                                                                                   | Configuration for matching git branches to this environment                                                          |
| `domains`                                                                                                            | [models.CreateDeploymentCustomEnvironmentDomains](../models/createdeploymentcustomenvironmentdomains.md)[]           | :heavy_minus_sign:                                                                                                   | List of domains associated with this environment                                                                     |
| `currentDeploymentAliases`                                                                                           | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | List of aliases for the current deployment                                                                           |
| `createdAt`                                                                                                          | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Timestamp when the environment was created                                                                           |
| `updatedAt`                                                                                                          | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | Timestamp when the environment was last updated                                                                      |