# GetProjectTokenRequest

## Example Usage

```typescript
import { GetProjectTokenRequest } from "@vercel/sdk/models/getprojecttokenop.js";

let value: GetProjectTokenRequest = {
  idOrName: "my-project, <prj_id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `idOrName`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | The project ID or name                                                       | my-project, <prj_id>                                                         |
| `teamId`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | The Team identifier to perform the request on behalf of.                     | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                |
| `slug`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The Team slug to perform the request on behalf of.                           | my-team-url-slug                                                             |
| `requestBody`                                                                | [models.GetProjectTokenRequestBody](../models/getprojecttokenrequestbody.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |