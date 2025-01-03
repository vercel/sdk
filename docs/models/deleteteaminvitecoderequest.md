# DeleteTeamInviteCodeRequest

## Example Usage

```typescript
import { DeleteTeamInviteCodeRequest } from "@vercel/sdk/models/deleteteaminvitecodeop.js";

let value: DeleteTeamInviteCodeRequest = {
  inviteId: "2wn2hudbr4chb1ecywo9dvzo7g9sscs6mzcz8htdde0txyom4l",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `inviteId`                                               | *string*                                                 | :heavy_check_mark:                                       | The Team invite code ID.                                 | 2wn2hudbr4chb1ecywo9dvzo7g9sscs6mzcz8htdde0txyom4l       |
| `teamId`                                                 | *string*                                                 | :heavy_check_mark:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |