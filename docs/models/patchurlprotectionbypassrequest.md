# PatchUrlProtectionBypassRequest

## Example Usage

```typescript
import { PatchUrlProtectionBypassRequest } from "@vercel/sdk/models/patchurlprotectionbypassop.js";

let value: PatchUrlProtectionBypassRequest = {
  id: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | The alias or deployment ID                               |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |
| `requestBody`                                            | *models.PatchUrlProtectionBypassRequestBody*             | :heavy_minus_sign:                                       | N/A                                                      |                                                          |