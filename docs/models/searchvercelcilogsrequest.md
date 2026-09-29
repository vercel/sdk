# SearchVercelCiLogsRequest

## Example Usage

```typescript
import { SearchVercelCiLogsRequest } from "@vercel/sdk/models/searchvercelcilogsop.js";

let value: SearchVercelCiLogsRequest = {
  invocation: [
    "<value 1>",
  ],
  search: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `invocation`                                                                                 | *string*[]                                                                                   | :heavy_check_mark:                                                                           | Invocation attempts to search, as \"<invocationId>:<attempt>\" (at most 50).                 |                                                                                              |
| `search`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | Only return log lines containing this text, ignoring case.                                   |                                                                                              |
| `level`                                                                                      | [models.SearchVercelCiLogsQueryParamLevel](../models/searchvercelcilogsqueryparamlevel.md)[] | :heavy_minus_sign:                                                                           | Only return log lines with one of these levels.                                              |                                                                                              |
| `teamId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | The Team identifier to perform the request on behalf of.                                     | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                |
| `slug`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The Team slug to perform the request on behalf of.                                           | my-team-url-slug                                                                             |