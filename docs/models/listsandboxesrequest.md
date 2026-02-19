# ListSandboxesRequest

## Example Usage

```typescript
import { ListSandboxesRequest } from "@vercel/sdk/models/listsandboxesop.js";

let value: ListSandboxesRequest = {
  project: "prj_abc123",
  limit: 20,
  since: 1540095775941,
  until: 1540095775951,
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `project`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | The unique identifier or name of the project to list sandboxes for.                     | prj_abc123                                                                              |
| `limit`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | Maximum number of sandboxes to return in the response. Used for pagination.             | 20                                                                                      |
| `since`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | Filter sandboxes created after this timestamp. Specified as Unix time in milliseconds.  | 1540095775941                                                                           |
| `until`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | Filter sandboxes created before this timestamp. Specified as Unix time in milliseconds. | 1540095775951                                                                           |
| `teamId`                                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | The Team identifier to perform the request on behalf of.                                | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                           |
| `slug`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | The Team slug to perform the request on behalf of.                                      | my-team-url-slug                                                                        |