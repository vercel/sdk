# GetDeploymentCustomEnvironmentDeployments1

If the deployment was created using a Custom Environment, then this property contains information regarding the environment used.

## Example Usage

```typescript
import { GetDeploymentCustomEnvironmentDeployments1 } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody216type.js";

let value: GetDeploymentCustomEnvironmentDeployments1 = {
  createdAt: 760.71,
  id: "<id>",
  slug: "<value>",
  type: "production",
  updatedAt: 1685.64,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `branchMatcher`                                                                                                    | [models.GetDeploymentCustomEnvironmentBranchMatcher](../models/getdeploymentcustomenvironmentbranchmatcher.md)     | :heavy_minus_sign:                                                                                                 | Configuration for matching git branches to this environment                                                        |
| `createdAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Timestamp when the environment was created                                                                         |
| `currentDeploymentAliases`                                                                                         | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | List of aliases for the current deployment                                                                         |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional description of the environment's purpose                                                                  |
| `domains`                                                                                                          | [models.GetDeploymentCustomEnvironmentDomains](../models/getdeploymentcustomenvironmentdomains.md)[]               | :heavy_minus_sign:                                                                                                 | List of domains associated with this environment                                                                   |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Unique identifier for the custom environment (format: env_*)                                                       |
| `slug`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | URL-friendly name of the environment                                                                               |
| `type`                                                                                                             | [models.GetDeploymentCustomEnvironmentDeploymentsType](../models/getdeploymentcustomenvironmentdeploymentstype.md) | :heavy_check_mark:                                                                                                 | The type of environment (production, preview, or development)                                                      |
| `updatedAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | Timestamp when the environment was last updated                                                                    |