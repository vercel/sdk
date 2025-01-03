# GetDeploymentFileContentsRequest

## Example Usage

```typescript
import { GetDeploymentFileContentsRequest } from "@vercel/sdk/models/getdeploymentfilecontentsop.js";

let value: GetDeploymentFileContentsRequest = {
  id: "<id>",
  fileId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | The unique deployment identifier                         |                                                          |
| `fileId`                                                 | *string*                                                 | :heavy_check_mark:                                       | The unique file identifier                               |                                                          |
| `path`                                                   | *string*                                                 | :heavy_minus_sign:                                       | Path to the file to fetch (only for Git deployments)     |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |