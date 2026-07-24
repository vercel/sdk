# CreateDeploymentGitRepo1

## Example Usage

```typescript
import { CreateDeploymentGitRepo1 } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentGitRepo1 = {
  namespace: "<value>",
  projectId: 5470.46,
  type: "gitlab",
  url: "https://pushy-expansion.name",
  path: "/net",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "team",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `namespace`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `projectId`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `type`                                                                                   | *"gitlab"*                                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `url`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `path`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `defaultBranch`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `private`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `ownerType`                                                                              | [models.CreateDeploymentGitRepoOwnerType](../models/createdeploymentgitrepoownertype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |