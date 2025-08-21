# GetConfigurationProductsRequest

## Example Usage

```typescript
import { GetConfigurationProductsRequest } from "@vercel/sdk/models/getconfigurationproductsop.js";

let value: GetConfigurationProductsRequest = {
  id: "icfg_cuwj0AdCdH3BwWT4LPijCC7t",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | ID of the integration configuration                      | icfg_cuwj0AdCdH3BwWT4LPijCC7t                            |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |