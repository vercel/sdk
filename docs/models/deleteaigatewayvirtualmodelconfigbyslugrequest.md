# DeleteAiGatewayVirtualModelConfigBySlugRequest

## Example Usage

```typescript
import { DeleteAiGatewayVirtualModelConfigBySlugRequest } from "@vercel/sdk/models/deleteaigatewayvirtualmodelconfigbyslugop.js";

let value: DeleteAiGatewayVirtualModelConfigBySlugRequest = {
  vmcSlug: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ownerId`                                                | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `vmcSlug`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `updatedBy`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `actingIp`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `actingUserAgent`                                        | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |