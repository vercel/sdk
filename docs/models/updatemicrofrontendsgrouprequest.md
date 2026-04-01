# UpdateMicrofrontendsGroupRequest

## Example Usage

```typescript
import { UpdateMicrofrontendsGroupRequest } from "@vercel/sdk/models/updatemicrofrontendsgroupop.js";

let value: UpdateMicrofrontendsGroupRequest = {
  groupId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `groupId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `teamId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | The Team identifier to perform the request on behalf of.                                         | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                    |
| `slug`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | The Team slug to perform the request on behalf of.                                               | my-team-url-slug                                                                                 |
| `requestBody`                                                                                    | [models.UpdateMicrofrontendsGroupRequestBody](../models/updatemicrofrontendsgrouprequestbody.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |