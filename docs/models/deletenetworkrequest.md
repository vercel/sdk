# DeleteNetworkRequest

## Example Usage

```typescript
import { DeleteNetworkRequest } from "@vercel/sdk/models/deletenetworkop.js";

let value: DeleteNetworkRequest = {
  networkId: "uzrmorq7bn05z-fz",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `networkId`                                              | *string*                                                 | :heavy_check_mark:                                       | The ID of the network to delete                          | uzrmorq7bn05z-fz                                         |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |