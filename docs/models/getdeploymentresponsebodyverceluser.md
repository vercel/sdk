# GetDeploymentResponseBodyVercelUser

Vercel user linked to the git provider account (only set if resolved)

## Example Usage

```typescript
import { GetDeploymentResponseBodyVercelUser } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody215type.js";

let value: GetDeploymentResponseBodyVercelUser = {
  id: "<id>",
  username: "Agustin.Blick33",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | Vercel user ID                   |
| `teamRoles`                      | *string*[]                       | :heavy_minus_sign:               | Team roles at time of deployment |
| `username`                       | *string*                         | :heavy_check_mark:               | Vercel username                  |