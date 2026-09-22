# UpdateProjectCustomEnvironments

Internal representation of a custom environment with all required properties

## Example Usage

```typescript
import { UpdateProjectCustomEnvironments } from "@vercel/sdk/models/updateprojectprojectsresourceconfig.js";

let value: UpdateProjectCustomEnvironments = {
  createdAt: 4832.13,
  id: "<id>",
  slug: "<value>",
  type: "preview",
  updatedAt: 5820.92,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `branchMatcher`                                                              | [models.UpdateProjectBranchMatcher](../models/updateprojectbranchmatcher.md) | :heavy_minus_sign:                                                           | Configuration for matching git branches to this environment                  |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | Timestamp when the environment was created                                   |
| `currentDeploymentAliases`                                                   | *string*[]                                                                   | :heavy_minus_sign:                                                           | List of aliases for the current deployment                                   |
| `description`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | Optional description of the environment's purpose                            |
| `domains`                                                                    | [models.UpdateProjectDomains](../models/updateprojectdomains.md)[]           | :heavy_minus_sign:                                                           | List of domains associated with this environment                             |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | Unique identifier for the custom environment (format: env_*)                 |
| `slug`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | URL-friendly name of the environment                                         |
| `type`                                                                       | [models.UpdateProjectType](../models/updateprojecttype.md)                   | :heavy_check_mark:                                                           | The type of environment (production, preview, or development)                |
| `updatedAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | Timestamp when the environment was last updated                              |