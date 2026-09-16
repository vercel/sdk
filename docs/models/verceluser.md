# VercelUser

Vercel user linked to the git provider account (only set if resolved)

## Example Usage

```typescript
import { VercelUser } from "@vercel/sdk/models/canceldeploymentresourceconfig.js";

let value: VercelUser = {
  id: "<id>",
  username: "Mason.Schamberger33",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | Vercel user ID                   |
| `teamRoles`                      | *string*[]                       | :heavy_minus_sign:               | Team roles at time of deployment |
| `username`                       | *string*                         | :heavy_check_mark:               | Vercel username                  |