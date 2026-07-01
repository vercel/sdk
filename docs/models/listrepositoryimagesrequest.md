# ListRepositoryImagesRequest

## Example Usage

```typescript
import { ListRepositoryImagesRequest } from "@vercel/sdk/models/listrepositoryimagesop.js";

let value: ListRepositoryImagesRequest = {
  projectId: "<id>",
  idOrName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `projectId`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `idOrName`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `limit`                                                        | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `cursor`                                                       | *string*                                                       | :heavy_minus_sign:                                             | Opaque pagination cursor returned by a previous list response. |                                                                |
| `untagged`                                                     | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `teamId`                                                       | *string*                                                       | :heavy_minus_sign:                                             | The Team identifier to perform the request on behalf of.       | team_1a2b3c4d5e6f7g8h9i0j1k2l                                  |
| `slug`                                                         | *string*                                                       | :heavy_minus_sign:                                             | The Team slug to perform the request on behalf of.             | my-team-url-slug                                               |