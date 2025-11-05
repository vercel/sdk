# UpdateTeamMemberRequest

## Example Usage

```typescript
import { UpdateTeamMemberRequest } from "@vercel/sdk/models/updateteammemberop.js";

let value: UpdateTeamMemberRequest = {
  uid: "ndfasllgPyCtREAqxxdyFKb",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  requestBody: {
    confirmed: true,
    role: "VIEWER",
    projects: [
      {
        projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
        role: "ADMIN",
      },
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uid`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | The ID of the member.                                                          | ndfasllgPyCtREAqxxdyFKb                                                        |
| `teamId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                  |
| `requestBody`                                                                  | [models.UpdateTeamMemberRequestBody](../models/updateteammemberrequestbody.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |