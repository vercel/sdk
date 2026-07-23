# GitUser

Git provider user associated with the commit author email (only set if resolved)

## Example Usage

```typescript
import { GitUser } from "@vercel/sdk/models/canceldeploymentresponsebody.js";

let value: GitUser = {
  id: "<id>",
  login: "Johanna.Prosacco57",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *models.CancelDeploymentId*                  | :heavy_check_mark:                           | N/A                                          |
| `login`                                      | *string*                                     | :heavy_check_mark:                           | Git provider username/login                  |
| `type`                                       | *string*                                     | :heavy_minus_sign:                           | User type                                    |
| `provider`                                   | *string*                                     | :heavy_minus_sign:                           | The git provider (github, gitlab, bitbucket) |