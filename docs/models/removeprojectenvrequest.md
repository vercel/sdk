# RemoveProjectEnvRequest

## Example Usage

```typescript
import { RemoveProjectEnvRequest } from "@vercel/sdk/models/removeprojectenvop.js";

let value: RemoveProjectEnvRequest = {
  idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
  id: "XMbOEya1gUUO1ir4",
  customEnvironmentId: "env_123abc4567",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `idOrName`                                                  | *string*                                                    | :heavy_check_mark:                                          | The unique project identifier or the project name           | prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA                            |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | The unique environment variable identifier                  | XMbOEya1gUUO1ir4                                            |
| `customEnvironmentId`                                       | *string*                                                    | :heavy_minus_sign:                                          | The unique custom environment identifier within the project | env_123abc4567                                              |
| `teamId`                                                    | *string*                                                    | :heavy_minus_sign:                                          | The Team identifier to perform the request on behalf of.    | team_1a2b3c4d5e6f7g8h9i0j1k2l                               |
| `slug`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The Team slug to perform the request on behalf of.          | my-team-url-slug                                            |