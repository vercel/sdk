# DeleteMicrofrontendsGroupRequest

## Example Usage

```typescript
import { DeleteMicrofrontendsGroupRequest } from "@vercel/sdk/models/deletemicrofrontendsgroupop.js";

let value: DeleteMicrofrontendsGroupRequest = {
  groupId: "mfe_",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `groupId`                                                | *string*                                                 | :heavy_check_mark:                                       | The microfrontend group ID to delete.                    | mfe_                                                     |
| `teamId`                                                 | *string*                                                 | :heavy_check_mark:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |