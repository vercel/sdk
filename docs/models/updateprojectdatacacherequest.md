# UpdateProjectDataCacheRequest

## Example Usage

```typescript
import { UpdateProjectDataCacheRequest } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheRequest = {
  projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    disabled: true,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `projectId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The unique project identifier                                                              | prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB                                                           |
| `teamId`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | The Team identifier to perform the request on behalf of.                                   | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                              |
| `slug`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | The Team slug to perform the request on behalf of.                                         | my-team-url-slug                                                                           |
| `requestBody`                                                                              | [models.UpdateProjectDataCacheRequestBody](../models/updateprojectdatacacherequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |