# LookupEdgeConfigTokenRequest

## Example Usage

```typescript
import { LookupEdgeConfigTokenRequest } from "@vercel/sdk/models/lookupedgeconfigtokenop.js";

let value: LookupEdgeConfigTokenRequest = {
  xVercelGlobalConfigToken: "<value>",
  edgeConfigId: "ecfg_",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `xVercelGlobalConfigToken`                               | *string*                                                 | :heavy_check_mark:                                       | The Global Config token to look up.                      |                                                          |
| `edgeConfigId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |