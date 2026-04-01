# GetMicrofrontendsConfigForProjectRequest

## Example Usage

```typescript
import { GetMicrofrontendsConfigForProjectRequest } from "@vercel/sdk/models/getmicrofrontendsconfigforprojectop.js";

let value: GetMicrofrontendsConfigForProjectRequest = {
  projectIdOrName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectIdOrName`                                        | *string*                                                 | :heavy_check_mark:                                       | The name or ID of the project                            |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |