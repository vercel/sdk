# JoinTeamResponseBody

Successfully joined a team.

## Example Usage

```typescript
import { JoinTeamResponseBody } from "@vercel/sdk/models/jointeamop.js";

let value: JoinTeamResponseBody = {
  from: "email",
  name: "My Team",
  slug: "my-team",
  teamId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `from`                                | *string*                              | :heavy_check_mark:                    | The origin of how the user joined.    | email                                 |
| `name`                                | *string*                              | :heavy_check_mark:                    | The name of the team the user joined. | My Team                               |
| `slug`                                | *string*                              | :heavy_check_mark:                    | The slug of the team the user joined. | my-team                               |
| `teamId`                              | *string*                              | :heavy_check_mark:                    | The ID of the team the user joined.   | team_LLHUOMOoDlqOp8wPE4kFo9pE         |