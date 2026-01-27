# GetCustomEnvironmentResponseBody

Internal representation of a custom environment with all required properties

## Example Usage

```typescript
import { GetCustomEnvironmentResponseBody } from "@vercel/sdk/models/getcustomenvironmentop.js";

let value: GetCustomEnvironmentResponseBody = {
  id: "<id>",
  slug: "<value>",
  type: "production",
  createdAt: 8059,
  updatedAt: 6058.69,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique identifier for the custom environment (format: env_*)                               |
| `slug`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | URL-friendly name of the environment                                                       |
| `type`                                                                                     | [models.GetCustomEnvironmentType](../models/getcustomenvironmenttype.md)                   | :heavy_check_mark:                                                                         | The type of environment (production, preview, or development)                              |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | Optional description of the environment's purpose                                          |
| `branchMatcher`                                                                            | [models.GetCustomEnvironmentBranchMatcher](../models/getcustomenvironmentbranchmatcher.md) | :heavy_minus_sign:                                                                         | Configuration for matching git branches to this environment                                |
| `domains`                                                                                  | [models.GetCustomEnvironmentDomains](../models/getcustomenvironmentdomains.md)[]           | :heavy_minus_sign:                                                                         | List of domains associated with this environment                                           |
| `currentDeploymentAliases`                                                                 | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | List of aliases for the current deployment                                                 |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | Timestamp when the environment was created                                                 |
| `updatedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | Timestamp when the environment was last updated                                            |