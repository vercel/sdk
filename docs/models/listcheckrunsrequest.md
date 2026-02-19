# ListCheckRunsRequest

## Example Usage

```typescript
import { ListCheckRunsRequest } from "@vercel/sdk/models/listcheckrunsop.js";

let value: ListCheckRunsRequest = {
  projectIdOrName: "<value>",
  checkId: "ckr_89ha9sdhh9a9",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectIdOrName`                                        | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `checkId`                                                | *string*                                                 | :heavy_check_mark:                                       | The ID of the resource that will be updated.             | ckr_89ha9sdhh9a9                                         |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |