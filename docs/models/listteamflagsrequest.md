# ListTeamFlagsRequest

## Example Usage

```typescript
import { ListTeamFlagsRequest } from "@vercel/sdk/models/listteamflagsop.js";

let value: ListTeamFlagsRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `state`                                                                          | [models.ListTeamFlagsQueryParamState](../models/listteamflagsqueryparamstate.md) | :heavy_minus_sign:                                                               | The state of the flags to retrieve. Defaults to `active`.                        |                                                                                  |
| `withMetadata`                                                                   | *boolean*                                                                        | :heavy_minus_sign:                                                               | Whether to include metadata in the response                                      |                                                                                  |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | Maximum number of flags to return.                                               |                                                                                  |
| `cursor`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | Pagination cursor to continue from.                                              |                                                                                  |
| `search`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | Search flags by their slug or description. Case-insensitive.                     |                                                                                  |
| `kind`                                                                           | [models.QueryParamKind](../models/queryparamkind.md)                             | :heavy_minus_sign:                                                               | The kind of flags to retrieve.                                                   |                                                                                  |
| `teamId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | The Team identifier to perform the request on behalf of.                         | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                    |
| `slug`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The Team slug to perform the request on behalf of.                               | my-team-url-slug                                                                 |