# GetTeamRequest

## Example Usage

```typescript
import { GetTeamRequest } from "@vercel/sdk/models/getteamop.js";

let value: GetTeamRequest = {
  slug: "my-team-url-slug",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | my-team-url-slug                                         |
| `teamId`                                                 | *string*                                                 | :heavy_check_mark:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |