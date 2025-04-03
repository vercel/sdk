# GitSource5

## Example Usage

```typescript
import { GitSource5 } from "@vercel/sdk/models/createdeploymentop.js";

let value: GitSource5 = {
  owner: "bitbucket_user",
  ref: "main",
  sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
  slug: "my-awesome-project",
  type: "bitbucket",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `owner`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | bitbucket_user                                                                                                         |
| `ref`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | main                                                                                                                   |
| `sha`                                                                                                                  | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0                                                                               |
| `slug`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | my-awesome-project                                                                                                     |
| `type`                                                                                                                 | [models.CreateDeploymentGitSourceDeploymentsRequestType](../models/createdeploymentgitsourcedeploymentsrequesttype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |