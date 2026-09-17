# CreateDeploymentGitRepo4

## Example Usage

```typescript
import { CreateDeploymentGitRepo4 } from "@vercel/sdk/models/responsebodyimages.js";

let value: CreateDeploymentGitRepo4 = {
  defaultBranch: "<value>",
  name: "<value>",
  org: "<value>",
  ownerType: "team",
  path: "/Library",
  private: false,
  repo: "<value>",
  type: "vercel",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultBranch`                                                                                                                      | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `name`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `org`                                                                                                                                | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `ownerType`                                                                                                                          | [models.CreateDeploymentGitRepoDeploymentsResponse200OwnerType](../models/createdeploymentgitrepodeploymentsresponse200ownertype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `path`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `private`                                                                                                                            | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `repo`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `type`                                                                                                                               | *"vercel"*                                                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |