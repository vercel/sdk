# UpdateProjectProtectionBypassRequest

## Example Usage

```typescript
import { UpdateProjectProtectionBypassRequest } from "@vercel/sdk/models/updateprojectprotectionbypassop.js";

let value: UpdateProjectProtectionBypassRequest = {
  idOrName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `idOrName`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique project identifier or the project name                                                        |                                                                                                          |
| `teamId`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The Team identifier to perform the request on behalf of.                                                 | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                            |
| `slug`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The Team slug to perform the request on behalf of.                                                       | my-team-url-slug                                                                                         |
| `requestBody`                                                                                            | [models.UpdateProjectProtectionBypassRequestBody](../models/updateprojectprotectionbypassrequestbody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |