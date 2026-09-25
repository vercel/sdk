# ListVercelCiJobDefinitionsRequest

## Example Usage

```typescript
import { ListVercelCiJobDefinitionsRequest } from "@vercel/sdk/models/listvercelcijobdefinitionsop.js";

let value: ListVercelCiJobDefinitionsRequest = {
  invocationId: "<id>",
  attempt: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `invocationId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `attempt`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |