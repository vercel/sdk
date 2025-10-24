# UnlinkSharedEnvVariableRequest

## Example Usage

```typescript
import { UnlinkSharedEnvVariableRequest } from "@vercel/sdk/models/unlinksharedenvvariableop.js";

let value: UnlinkSharedEnvVariableRequest = {
  id: "<id>",
  projectId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | The unique ID for the Shared Environment Variable to unlink from the project. |                                                                               |
| `projectId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `teamId`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | The Team identifier to perform the request on behalf of.                      | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                 |
| `slug`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The Team slug to perform the request on behalf of.                            | my-team-url-slug                                                              |