# UpdateMicrofrontendsRequest

## Example Usage

```typescript
import { UpdateMicrofrontendsRequest } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsRequest = {
  projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `projectId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | The unique project identifier                                                          | prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB                                                       |
| `teamId`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | The Team identifier to perform the request on behalf of.                               | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                          |
| `slug`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | The Team slug to perform the request on behalf of.                                     | my-team-url-slug                                                                       |
| `requestBody`                                                                          | [models.UpdateMicrofrontendsRequestBody](../models/updatemicrofrontendsrequestbody.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |