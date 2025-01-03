# RemoveTeamMemberRequest

## Example Usage

```typescript
import { RemoveTeamMemberRequest } from "@vercel/sdk/models/removeteammemberop.js";

let value: RemoveTeamMemberRequest = {
  uid: "ndlgr43fadlPyCtREAqxxdyFK",
  newDefaultTeamId: "team_nllPyCtREAqxxdyFKbbMDlxd",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `uid`                                                                     | *string*                                                                  | :heavy_check_mark:                                                        | The user ID of the member.                                                | ndlgr43fadlPyCtREAqxxdyFK                                                 |
| `newDefaultTeamId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | The ID of the team to set as the new default team for the Northstar user. | team_nllPyCtREAqxxdyFKbbMDlxd                                             |
| `teamId`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       | team_1a2b3c4d5e6f7g8h9i0j1k2l                                             |