# CancelDeploymentGitUser

Git provider user associated with the commit author email (only set if resolved)

## Example Usage

```typescript
import { CancelDeploymentGitUser } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentGitUser = {
  id: "<id>",
  login: "Coy72",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *models.CancelDeploymentId*                  | :heavy_check_mark:                           | N/A                                          |
| `login`                                      | *string*                                     | :heavy_check_mark:                           | Git provider username/login                  |
| `type`                                       | *string*                                     | :heavy_minus_sign:                           | User type                                    |
| `provider`                                   | *string*                                     | :heavy_minus_sign:                           | The git provider (github, gitlab, bitbucket) |