# ListTeamFlagSettingsRequest

## Example Usage

```typescript
import { ListTeamFlagSettingsRequest } from "@vercel/sdk/models/listteamflagsettingsop.js";

let value: ListTeamFlagSettingsRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | Maximum number of settings to return.                    |                                                          |
| `cursor`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Pagination cursor to continue from.                      |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_check_mark:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |