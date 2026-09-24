# CustomEnvironment1

If the deployment was created using a Custom Environment, then this property contains information regarding the environment used.

## Example Usage

```typescript
import { CustomEnvironment1 } from "@vercel/sdk/models/readystate.js";

let value: CustomEnvironment1 = {
  createdAt: 4.71,
  id: "<id>",
  slug: "<value>",
  type: "production",
  updatedAt: 6889.56,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `branchMatcher`                                                                      | [models.CustomEnvironmentBranchMatcher](../models/customenvironmentbranchmatcher.md) | :heavy_minus_sign:                                                                   | Configuration for matching git branches to this environment                          |
| `createdAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | Timestamp when the environment was created                                           |
| `currentDeploymentAliases`                                                           | *string*[]                                                                           | :heavy_minus_sign:                                                                   | List of aliases for the current deployment                                           |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Optional description of the environment's purpose                                    |
| `domains`                                                                            | [models.CustomEnvironmentDomains](../models/customenvironmentdomains.md)[]           | :heavy_minus_sign:                                                                   | List of domains associated with this environment                                     |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier for the custom environment (format: env_*)                         |
| `slug`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | URL-friendly name of the environment                                                 |
| `type`                                                                               | [models.CustomEnvironmentType](../models/customenvironmenttype.md)                   | :heavy_check_mark:                                                                   | The type of environment (production, preview, or development)                        |
| `updatedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | Timestamp when the environment was last updated                                      |