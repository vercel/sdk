# PostTeamDsyncRolesRequestBody

## Example Usage

```typescript
import { PostTeamDsyncRolesRequestBody } from "@vercel/sdk/models/postteamdsyncrolesop.js";

let value: PostTeamDsyncRolesRequestBody = {
  roles: {},
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `roles`                                            | Record<string, *models.PostTeamDsyncRolesRoles*>   | :heavy_check_mark:                                 | Directory groups to role or access group mappings. |