# DeleteTeamRequest

## Example Usage

```typescript
import { DeleteTeamRequest } from "@vercel/sdk/models/deleteteamop.js";

let value: DeleteTeamRequest = {
  newDefaultTeamId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `newDefaultTeamId`                                                 | *string*                                                           | :heavy_minus_sign:                                                 | Id of the team to be set as the new default team                   | team_LLHUOMOoDlqOp8wPE4kFo9pE                                      |
| `teamId`                                                           | *string*                                                           | :heavy_check_mark:                                                 | The Team identifier to perform the request on behalf of.           | team_1a2b3c4d5e6f7g8h9i0j1k2l                                      |
| `slug`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The Team slug to perform the request on behalf of.                 | my-team-url-slug                                                   |
| `requestBody`                                                      | [models.DeleteTeamRequestBody](../models/deleteteamrequestbody.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |