# GetDeploymentResponseBodyGitUser

Git provider user associated with the commit author email (only set if resolved)

## Example Usage

```typescript
import { GetDeploymentResponseBodyGitUser } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentResponseBodyGitUser = {
  id: 1292.39,
  login: "Concepcion_Krajcik",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *models.GetDeploymentResponseBodyId*         | :heavy_check_mark:                           | N/A                                          |
| `login`                                      | *string*                                     | :heavy_check_mark:                           | Git provider username/login                  |
| `type`                                       | *string*                                     | :heavy_minus_sign:                           | User type                                    |
| `provider`                                   | *string*                                     | :heavy_minus_sign:                           | The git provider (github, gitlab, bitbucket) |