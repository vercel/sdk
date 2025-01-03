# InviteUserToTeamRequest

## Example Usage

```typescript
import { InviteUserToTeamRequest } from "@vercel/sdk/models/inviteusertoteamop.js";

let value: InviteUserToTeamRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  requestBody: {
    uid: "kr1PsOIzqEL5Xg6M4VZcZosf",
    email: "john@example.com",
    role: "BILLING",
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
| `teamId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                  |
| `requestBody`                                                                  | [models.InviteUserToTeamRequestBody](../models/inviteusertoteamrequestbody.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |