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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *models.GetDeploymentResponseBodyId*                                                                                     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `login`                                                                                                                  | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Git provider username/login                                                                                              |
| `isBot`                                                                                                                  | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Is the git user a bot                                                                                                    |
| `type`                                                                                                                   | [models.GetDeploymentResponseBodyDeploymentsResponseType](../models/getdeploymentresponsebodydeploymentsresponsetype.md) | :heavy_minus_sign:                                                                                                       | User type                                                                                                                |