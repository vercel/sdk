# UpdateTeamMemberRequestBody

## Example Usage

```typescript
import { UpdateTeamMemberRequestBody } from "@vercel/sdk/models/updateteammemberop.js";

let value: UpdateTeamMemberRequestBody = {
  role: "VIEWER",
  teamPermissions: [
    "CreateProject",
    "FullProductionDeployment",
  ],
  projects: [
    {
      projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
      role: "ADMIN",
    },
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `confirmed`                                                                                                            | *true*                                                                                                                 | :heavy_minus_sign:                                                                                                     | Accept a user who requested access to the team.                                                                        | true                                                                                                                   |
| `role`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The role in the team of the member.                                                                                    | VIEWER                                                                                                                 |
| `teamPermissions`                                                                                                      | [models.UpdateTeamMemberTeamPermissions](../models/updateteammemberteampermissions.md)[]                               | :heavy_minus_sign:                                                                                                     | The team permissions to set for the member. Permissions must be compatible with the team roles assigned to the member. | [<br/>"CreateProject",<br/>"FullProductionDeployment"<br/>]                                                            |
| `projects`                                                                                                             | [models.UpdateTeamMemberProjects](../models/updateteammemberprojects.md)[]                                             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `joinedFrom`                                                                                                           | [models.UpdateTeamMemberJoinedFrom](../models/updateteammemberjoinedfrom.md)                                           | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |