# ReadPrivateLinkEndpointRequest

## Example Usage

```typescript
import { ReadPrivateLinkEndpointRequest } from "@vercel/sdk/models/readprivatelinkendpointop.js";

let value: ReadPrivateLinkEndpointRequest = {
  projectId: "prj_a1b2c3d4e5f6g7h8",
  endpointId: "ple_a1b2c3d4e5f6g7h8",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectId`                                              | *string*                                                 | :heavy_check_mark:                                       | The project ID the PrivateLink endpoint belongs to.      | prj_a1b2c3d4e5f6g7h8                                     |
| `endpointId`                                             | *string*                                                 | :heavy_check_mark:                                       | The unique identifier of the PrivateLink endpoint.       | ple_a1b2c3d4e5f6g7h8                                     |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |