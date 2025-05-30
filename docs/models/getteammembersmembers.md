# GetTeamMembersMembers

## Example Usage

```typescript
import { GetTeamMembersMembers } from "@vercel/sdk/models/getteammembersop.js";

let value: GetTeamMembersMembers = {
  avatar: "123a6c5209bc3778245d011443644c8d27dc2c50",
  confirmed: true,
  email: "jane.doe@example.com",
  role: "OWNER",
  uid: "zTuNVUXEAvvnNN3IaqinkyMw",
  username: "jane-doe",
  name: "Jane Doe",
  createdAt: 1588720733602,
  accessRequestedAt: 1588820733602,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `avatar`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | ID of the file for the Avatar of this member.                                      | 123a6c5209bc3778245d011443644c8d27dc2c50                                           |
| `confirmed`                                                                        | *boolean*                                                                          | :heavy_check_mark:                                                                 | Boolean that indicates if this member was confirmed by an owner.                   | true                                                                               |
| `email`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | The email of this member.                                                          | jane.doe@example.com                                                               |
| `github`                                                                           | [models.GetTeamMembersGithub](../models/getteammembersgithub.md)                   | :heavy_minus_sign:                                                                 | Information about the GitHub account for this user.                                |                                                                                    |
| `gitlab`                                                                           | [models.GetTeamMembersGitlab](../models/getteammembersgitlab.md)                   | :heavy_minus_sign:                                                                 | Information about the GitLab account of this user.                                 |                                                                                    |
| `bitbucket`                                                                        | [models.GetTeamMembersBitbucket](../models/getteammembersbitbucket.md)             | :heavy_minus_sign:                                                                 | Information about the Bitbucket account of this user.                              |                                                                                    |
| `role`                                                                             | [models.GetTeamMembersRole](../models/getteammembersrole.md)                       | :heavy_check_mark:                                                                 | Role of this user in the team.                                                     | OWNER                                                                              |
| `uid`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of this user.                                                               | zTuNVUXEAvvnNN3IaqinkyMw                                                           |
| `username`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The unique username of this user.                                                  | jane-doe                                                                           |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | The name of this user.                                                             | Jane Doe                                                                           |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | Timestamp in milliseconds when this member was added.                              | 1588720733602                                                                      |
| `accessRequestedAt`                                                                | *number*                                                                           | :heavy_minus_sign:                                                                 | Timestamp in milliseconds for when this team member was accepted by an owner.      | 1588820733602                                                                      |
| `joinedFrom`                                                                       | [models.GetTeamMembersJoinedFrom](../models/getteammembersjoinedfrom.md)           | :heavy_minus_sign:                                                                 | Map with information about the members origin if they joined by requesting access. |                                                                                    |
| `projects`                                                                         | [models.GetTeamMembersProjects](../models/getteammembersprojects.md)[]             | :heavy_minus_sign:                                                                 | Array of project memberships                                                       |                                                                                    |