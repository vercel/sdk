# ListNetworksRequest

## Example Usage

```typescript
import { ListNetworksRequest } from "@vercel/sdk/models/listnetworksop.js";

let value: ListNetworksRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `includeHostedZones`                                       | *boolean*                                                  | :heavy_minus_sign:                                         | Whether to include Hosted Zones in the response            |                                                            |
| `includePeeringConnections`                                | *boolean*                                                  | :heavy_minus_sign:                                         | Whether to include VPC Peering connections in the response |                                                            |
| `includeProjects`                                          | *boolean*                                                  | :heavy_minus_sign:                                         | Whether to include projects in the response                |                                                            |
| `search`                                                   | *string*                                                   | :heavy_minus_sign:                                         | The query to use as a filter for returned networks         |                                                            |
| `teamId`                                                   | *string*                                                   | :heavy_minus_sign:                                         | The Team identifier to perform the request on behalf of.   | team_1a2b3c4d5e6f7g8h9i0j1k2l                              |
| `slug`                                                     | *string*                                                   | :heavy_minus_sign:                                         | The Team slug to perform the request on behalf of.         | my-team-url-slug                                           |