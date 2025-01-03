# ArtifactExistsRequest

## Example Usage

```typescript
import { ArtifactExistsRequest } from "@vercel/sdk/models/artifactexistsop.js";

let value: ArtifactExistsRequest = {
  hash: "12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `hash`                                                   | *string*                                                 | :heavy_check_mark:                                       | The artifact hash                                        | 12HKQaOmR5t5Uy6vdcQsNIiZgHGB                             |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |