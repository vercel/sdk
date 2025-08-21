# GetTeamMembersProjects

Array of project memberships

## Example Usage

```typescript
import { GetTeamMembersProjects } from "@vercel/sdk/models/getteammembersop.js";

let value: GetTeamMembersProjects = {
  name: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `role`                                                                                 | [models.GetTeamMembersTeamsResponseRole](../models/getteammembersteamsresponserole.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |