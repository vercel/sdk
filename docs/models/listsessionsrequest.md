# ListSessionsRequest

## Example Usage

```typescript
import { ListSessionsRequest } from "@vercel/sdk/models/listsessionsop.js";

let value: ListSessionsRequest = {
  project: "prj_abc123",
  name: "my-sandbox",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `project`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | The unique identifier or name of the project to list sessions for.                              | prj_abc123                                                                                      |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | Filter sessions by sandbox name. Only sessions belonging to the specified sandbox are returned. | my-sandbox                                                                                      |
| `limit`                                                                                         | *number*                                                                                        | :heavy_minus_sign:                                                                              | Maximum number of sessions to return in the response. Used for pagination.                      | 20                                                                                              |
| `cursor`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | Opaque pagination cursor from a previous response.                                              |                                                                                                 |
| `sortOrder`                                                                                     | [models.ListSessionsQueryParamSortOrder](../models/listsessionsqueryparamsortorder.md)          | :heavy_minus_sign:                                                                              | Sort direction for results by creation time.                                                    |                                                                                                 |
| `teamId`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | The Team identifier to perform the request on behalf of.                                        | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                   |
| `slug`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The Team slug to perform the request on behalf of.                                              | my-team-url-slug                                                                                |