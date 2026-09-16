# CreateDeploymentGitRepo1

## Example Usage

```typescript
import { CreateDeploymentGitRepo1 } from "@vercel/sdk/models/createdeploymentresponsebodydeploymentsstatus.js";

let value: CreateDeploymentGitRepo1 = {
  defaultBranch: "<value>",
  name: "<value>",
  namespace: "<value>",
  ownerType: "user",
  path: "/usr/ports",
  private: false,
  projectId: 3085.01,
  type: "gitlab",
  url: "https://gorgeous-tennis.info",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `defaultBranch`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `namespace`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ownerType`                                                                              | [models.CreateDeploymentGitRepoOwnerType](../models/createdeploymentgitrepoownertype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `path`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `private`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `projectId`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `type`                                                                                   | *"gitlab"*                                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `url`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |