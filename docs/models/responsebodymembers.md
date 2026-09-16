# ResponseBodyMembers

## Example Usage

```typescript
import { ResponseBodyMembers } from "@vercel/sdk/models/getprojectmembersop.js";

let value: ResponseBodyMembers = {
  avatar: "123a6c5209bc3778245d011443644c8d27dc2c50",
  computedProjectRole: "ADMIN",
  createdAt: 1588720733602,
  email: "jane.doe@example.com",
  name: "Jane Doe",
  role: "ADMIN",
  teamRole: "CONTRIBUTOR",
  uid: "zTuNVUXEAvvnNN3IaqinkyMw",
  username: "jane-doe",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `avatar`                                                         | *string*                                                         | :heavy_minus_sign:                                               | ID of the file for the Avatar of this member.                    | 123a6c5209bc3778245d011443644c8d27dc2c50                         |
| `computedProjectRole`                                            | [models.ComputedProjectRole](../models/computedprojectrole.md)   | :heavy_check_mark:                                               | Role of this user in the project.                                | ADMIN                                                            |
| `createdAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | Timestamp in milliseconds when this member was added.            | 1588720733602                                                    |
| `email`                                                          | *string*                                                         | :heavy_check_mark:                                               | The email of this member.                                        | jane.doe@example.com                                             |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | The name of this user.                                           | Jane Doe                                                         |
| `role`                                                           | [models.ResponseBodyRole](../models/responsebodyrole.md)         | :heavy_check_mark:                                               | Role of this user in the project.                                | ADMIN                                                            |
| `teamRole`                                                       | [models.ResponseBodyTeamRole](../models/responsebodyteamrole.md) | :heavy_check_mark:                                               | The role of this user in the team.                               | CONTRIBUTOR                                                      |
| `uid`                                                            | *string*                                                         | :heavy_check_mark:                                               | The ID of this user.                                             | zTuNVUXEAvvnNN3IaqinkyMw                                         |
| `username`                                                       | *string*                                                         | :heavy_check_mark:                                               | The unique username of this user.                                | jane-doe                                                         |