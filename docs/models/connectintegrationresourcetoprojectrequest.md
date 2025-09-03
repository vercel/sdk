# ConnectIntegrationResourceToProjectRequest

## Example Usage

```typescript
import { ConnectIntegrationResourceToProjectRequest } from "@vercel/sdk/models/connectintegrationresourcetoprojectop.js";

let value: ConnectIntegrationResourceToProjectRequest = {
  integrationConfigurationId: "<id>",
  resourceId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `integrationConfigurationId`                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `resourceId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `teamId`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The Team identifier to perform the request on behalf of.                                                             | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                                        |
| `slug`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The Team slug to perform the request on behalf of.                                                                   | my-team-url-slug                                                                                                     |
| `requestBody`                                                                                                        | [models.ConnectIntegrationResourceToProjectRequestBody](../models/connectintegrationresourcetoprojectrequestbody.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |