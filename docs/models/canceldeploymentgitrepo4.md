# CancelDeploymentGitRepo4

## Example Usage

```typescript
import { CancelDeploymentGitRepo4 } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentGitRepo4 = {
  org: "<value>",
  repo: "<value>",
  type: "vercel",
  path: "/usr/lib",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
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
| `ownerType`                                                                                                                          | [models.CancelDeploymentGitRepoDeploymentsResponse200OwnerType](../models/canceldeploymentgitrepodeploymentsresponse200ownertype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |