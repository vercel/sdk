# ResponseBodyVercelUser

Vercel user linked to the git provider account (only set if resolved)

## Example Usage

```typescript
import { ResponseBodyVercelUser } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: ResponseBodyVercelUser = {
  id: "<id>",
  username: "Prince26",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | Vercel user ID                                                       |
| `username`                                                           | *string*                                                             | :heavy_check_mark:                                                   | Vercel username                                                      |
| `teamRoles`                                                          | [models.ResponseBodyTeamRoles](../models/responsebodyteamroles.md)[] | :heavy_minus_sign:                                                   | Team roles at time of deployment                                     |