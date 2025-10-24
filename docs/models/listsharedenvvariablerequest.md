# ListSharedEnvVariableRequest

## Example Usage

```typescript
import { ListSharedEnvVariableRequest } from "@vercel/sdk/models/listsharedenvvariableop.js";

let value: ListSharedEnvVariableRequest = {
  projectId: "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
  ids: "env_2WjyKQmM8ZnGcJsPWMrHRHrE,env_2WjyKQmM8ZnGcJsPWMrHRCRV",
  excludeIdsQueryParameter:
    "env_2WjyKQmM8ZnGcJsPWMrHRHrE,env_2WjyKQmM8ZnGcJsPWMrHRCRV",
  excludeIdsQueryParameter1:
    "env_2WjyKQmM8ZnGcJsPWMrHRHrE,env_2WjyKQmM8ZnGcJsPWMrHRCRV",
  excludeProjectIdQueryParameter: "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
  excludeProjectIdQueryParameter1: "prj_2WjyKQmM8ZnGcJsPWMrHRHrE",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `search`                                                  | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `projectId`                                               | *string*                                                  | :heavy_minus_sign:                                        | Filter SharedEnvVariables that belong to a project        | prj_2WjyKQmM8ZnGcJsPWMrHRHrE                              |
| `ids`                                                     | *string*                                                  | :heavy_minus_sign:                                        | Filter SharedEnvVariables based on comma separated ids    | env_2WjyKQmM8ZnGcJsPWMrHRHrE,env_2WjyKQmM8ZnGcJsPWMrHRCRV |
| `excludeIdsQueryParameter`                                | *string*                                                  | :heavy_minus_sign:                                        | Filter SharedEnvVariables based on comma separated ids    | env_2WjyKQmM8ZnGcJsPWMrHRHrE,env_2WjyKQmM8ZnGcJsPWMrHRCRV |
| `excludeIdsQueryParameter1`                               | *string*                                                  | :heavy_minus_sign:                                        | Filter SharedEnvVariables based on comma separated ids    | env_2WjyKQmM8ZnGcJsPWMrHRHrE,env_2WjyKQmM8ZnGcJsPWMrHRCRV |
| `excludeProjectIdQueryParameter`                          | *string*                                                  | :heavy_minus_sign:                                        | Filter SharedEnvVariables that belong to a project        | prj_2WjyKQmM8ZnGcJsPWMrHRHrE                              |
| `excludeProjectIdQueryParameter1`                         | *string*                                                  | :heavy_minus_sign:                                        | Filter SharedEnvVariables that belong to a project        | prj_2WjyKQmM8ZnGcJsPWMrHRHrE                              |
| `teamId`                                                  | *string*                                                  | :heavy_minus_sign:                                        | The Team identifier to perform the request on behalf of.  | team_1a2b3c4d5e6f7g8h9i0j1k2l                             |
| `slug`                                                    | *string*                                                  | :heavy_minus_sign:                                        | The Team slug to perform the request on behalf of.        | my-team-url-slug                                          |