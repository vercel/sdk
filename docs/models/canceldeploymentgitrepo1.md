# CancelDeploymentGitRepo1

## Example Usage

```typescript
import { CancelDeploymentGitRepo1 } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentGitRepo1 = {
  namespace: "<value>",
  projectId: 4130.86,
  type: "gitlab",
  url: "https://square-farm.org",
  path: "/tmp",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "user",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `namespace`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `projectId`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [models.CancelDeploymentGitRepoType](../models/canceldeploymentgitrepotype.md)           | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `url`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `path`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `defaultBranch`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `private`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ownerType`                                                                              | [models.CancelDeploymentGitRepoOwnerType](../models/canceldeploymentgitrepoownertype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |