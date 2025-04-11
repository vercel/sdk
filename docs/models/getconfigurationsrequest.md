# GetConfigurationsRequest

## Example Usage

```typescript
import { GetConfigurationsRequest } from "@vercel/sdk/models/getconfigurationsop.js";

let value: GetConfigurationsRequest = {
  view: "project",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `view`                                                   | [models.View](../models/view.md)                         | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `installationType`                                       | [models.InstallationType](../models/installationtype.md) | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `integrationIdOrSlug`                                    | *string*                                                 | :heavy_minus_sign:                                       | ID of the integration                                    |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |