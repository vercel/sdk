# GetRepositoryImageRequest

## Example Usage

```typescript
import { GetRepositoryImageRequest } from "@vercel/sdk/models/getrepositoryimageop.js";

let value: GetRepositoryImageRequest = {
  projectId: "<id>",
  idOrName: "<value>",
  imageIdOrDigest: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `projectId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `idOrName`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `imageIdOrDigest`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | The internal image id (`image_...`) or the image manifest digest (`sha256:...`). |                                                                                  |
| `teamId`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | The Team identifier to perform the request on behalf of.                         | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                    |
| `slug`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The Team slug to perform the request on behalf of.                               | my-team-url-slug                                                                 |