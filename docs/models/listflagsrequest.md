# ListFlagsRequest

## Example Usage

```typescript
import { ListFlagsRequest } from "@vercel/sdk/models/listflagsop.js";

let value: ListFlagsRequest = {
  projectIdOrName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectIdOrName`                                                        | *string*                                                                 | :heavy_check_mark:                                                       | The project id or name                                                   |                                                                          |
| `state`                                                                  | [models.QueryParamState](../models/queryparamstate.md)                   | :heavy_minus_sign:                                                       | The state of the flags to retrieve. Defaults to `active`.                |                                                                          |
| `withMetadata`                                                           | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether to include metadata in the response                              |                                                                          |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | Maximum number of flags to return. When not set, all flags are returned. |                                                                          |
| `cursor`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Pagination cursor to continue from.                                      |                                                                          |
| `search`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Search flags by their slug or description. Case-insensitive.             |                                                                          |
| `teamId`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | The Team identifier to perform the request on behalf of.                 | team_1a2b3c4d5e6f7g8h9i0j1k2l                                            |
| `slug`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | The Team slug to perform the request on behalf of.                       | my-team-url-slug                                                         |