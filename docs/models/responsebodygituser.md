# ResponseBodyGitUser

Git provider user associated with the commit author email (only set if resolved)

## Example Usage

```typescript
import { ResponseBodyGitUser } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: ResponseBodyGitUser = {
  id: 5710.09,
  login: "Kaleb_Koepp27",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *models.GetDeploymentResponseBodyId*         | :heavy_check_mark:                           | N/A                                          |
| `login`                                      | *string*                                     | :heavy_check_mark:                           | Git provider username/login                  |
| `type`                                       | *string*                                     | :heavy_minus_sign:                           | User type                                    |
| `provider`                                   | *string*                                     | :heavy_minus_sign:                           | The git provider (github, gitlab, bitbucket) |