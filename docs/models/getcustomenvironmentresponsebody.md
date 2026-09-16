# GetCustomEnvironmentResponseBody

Internal representation of a custom environment with all required properties

## Example Usage

```typescript
import { GetCustomEnvironmentResponseBody } from "@vercel/sdk/models/getcustomenvironmentop.js";

let value: GetCustomEnvironmentResponseBody = {
  createdAt: 1503.25,
  id: "<id>",
  slug: "<value>",
  type: "production",
  updatedAt: 6058.69,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `branchMatcher`                                                                            | [models.GetCustomEnvironmentBranchMatcher](../models/getcustomenvironmentbranchmatcher.md) | :heavy_minus_sign:                                                                         | Configuration for matching git branches to this environment                                |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | Timestamp when the environment was created                                                 |
| `currentDeploymentAliases`                                                                 | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | List of aliases for the current deployment                                                 |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | Optional description of the environment's purpose                                          |
| `domains`                                                                                  | [models.GetCustomEnvironmentDomains](../models/getcustomenvironmentdomains.md)[]           | :heavy_minus_sign:                                                                         | List of domains associated with this environment                                           |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique identifier for the custom environment (format: env_*)                               |
| `slug`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | URL-friendly name of the environment                                                       |
| `type`                                                                                     | [models.GetCustomEnvironmentType](../models/getcustomenvironmenttype.md)                   | :heavy_check_mark:                                                                         | The type of environment (production, preview, or development)                              |
| `updatedAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | Timestamp when the environment was last updated                                            |