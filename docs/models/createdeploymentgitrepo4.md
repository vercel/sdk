# CreateDeploymentGitRepo4

## Example Usage

```typescript
import { CreateDeploymentGitRepo4 } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentGitRepo4 = {
  org: "<value>",
  repo: "<value>",
  type: "vercel",
  path: "/opt/lib",
  defaultBranch: "<value>",
  name: "<value>",
  private: true,
  ownerType: "user",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `org`                                                                                                                                | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `repo`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `type`                                                                                                                               | *"vercel"*                                                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `path`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `defaultBranch`                                                                                                                      | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `name`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `private`                                                                                                                            | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `ownerType`                                                                                                                          | [models.CreateDeploymentGitRepoDeploymentsResponse200OwnerType](../models/createdeploymentgitrepodeploymentsresponse200ownertype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |