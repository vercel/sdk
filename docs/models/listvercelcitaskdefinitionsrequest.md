# ListVercelCiTaskDefinitionsRequest

## Example Usage

```typescript
import { ListVercelCiTaskDefinitionsRequest } from "@vercel/sdk/models/listvercelcitaskdefinitionsop.js";

let value: ListVercelCiTaskDefinitionsRequest = {
  invocationId: "<id>",
  attempt: "<value>",
  jobDefinitionId: "<id>",
  runAttempt: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `invocationId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `attempt`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `jobDefinitionId`                                        | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `runAttempt`                                             | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |