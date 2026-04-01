# GetDeploymentsVercelUser

Vercel user linked to the git provider account (only set if resolved)

## Example Usage

```typescript
import { GetDeploymentsVercelUser } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsVercelUser = {
  id: "<id>",
  username: "Chanelle57",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | Vercel user ID                                                           |
| `username`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Vercel username                                                          |
| `teamRoles`                                                              | [models.GetDeploymentsTeamRoles](../models/getdeploymentsteamroles.md)[] | :heavy_minus_sign:                                                       | Team roles at time of deployment                                         |