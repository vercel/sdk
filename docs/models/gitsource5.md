# GitSource5

## Example Usage

```typescript
import { GitSource5 } from "@vercel/sdk/models/createdeploymentop.js";

let value: GitSource5 = {
  ref: "main",
  repoUuid: "123e4567-e89b-12d3-a456-426614174000",
  sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
  type: "bitbucket",
  workspaceUuid: "987e6543-e21b-12d3-a456-426614174000",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `ref`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | main                                                                                                                   |
| `repoUuid`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | 123e4567-e89b-12d3-a456-426614174000                                                                                   |
| `sha`                                                                                                                  | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0                                                                               |
| `type`                                                                                                                 | [models.CreateDeploymentGitSourceDeploymentsRequestType](../models/createdeploymentgitsourcedeploymentsrequesttype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `workspaceUuid`                                                                                                        | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | 987e6543-e21b-12d3-a456-426614174000                                                                                   |