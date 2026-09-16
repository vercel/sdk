# UploadProjectAvatarCustomEnvironments

Internal representation of a custom environment with all required properties

## Example Usage

```typescript
import { UploadProjectAvatarCustomEnvironments } from "@vercel/sdk/models/uploadprojectavatarhasvalue.js";

let value: UploadProjectAvatarCustomEnvironments = {
  createdAt: 5625.09,
  id: "<id>",
  slug: "<value>",
  type: "development",
  updatedAt: 7283.48,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `branchMatcher`                                                                          | [models.UploadProjectAvatarBranchMatcher](../models/uploadprojectavatarbranchmatcher.md) | :heavy_minus_sign:                                                                       | Configuration for matching git branches to this environment                              |
| `createdAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | Timestamp when the environment was created                                               |
| `currentDeploymentAliases`                                                               | *string*[]                                                                               | :heavy_minus_sign:                                                                       | List of aliases for the current deployment                                               |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | Optional description of the environment's purpose                                        |
| `domains`                                                                                | [models.UploadProjectAvatarDomains](../models/uploadprojectavatardomains.md)[]           | :heavy_minus_sign:                                                                       | List of domains associated with this environment                                         |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier for the custom environment (format: env_*)                             |
| `slug`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | URL-friendly name of the environment                                                     |
| `type`                                                                                   | [models.UploadProjectAvatarType](../models/uploadprojectavatartype.md)                   | :heavy_check_mark:                                                                       | The type of environment (production, preview, or development)                            |
| `updatedAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | Timestamp when the environment was last updated                                          |