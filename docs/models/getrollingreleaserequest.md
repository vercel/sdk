# GetRollingReleaseRequest

## Example Usage

```typescript
import { GetRollingReleaseRequest } from "@vercel/sdk/models/getrollingreleaseop.js";

let value: GetRollingReleaseRequest = {
  idOrName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `idOrName`                                               | *string*                                                 | :heavy_check_mark:                                       | Project ID or project name (URL-encoded)                 |                                                          |
| `state`                                                  | [models.State](../models/state.md)                       | :heavy_minus_sign:                                       | Filter by rolling release state                          |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |