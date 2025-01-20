# GetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRequest

## Example Usage

```typescript
import { GetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRequest } from "@vercel/sdk/models/getv9projectsidornamecustomenvironmentsenvironmentslugoridop.js";

let value: GetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRequest = {
  idOrName: "<value>",
  environmentSlugOrId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `idOrName`                                                  | *string*                                                    | :heavy_check_mark:                                          | The unique project identifier or the project name           |                                                             |
| `environmentSlugOrId`                                       | *string*                                                    | :heavy_check_mark:                                          | The unique custom environment identifier within the project |                                                             |
| `teamId`                                                    | *string*                                                    | :heavy_minus_sign:                                          | The Team identifier to perform the request on behalf of.    | team_1a2b3c4d5e6f7g8h9i0j1k2l                               |
| `slug`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The Team slug to perform the request on behalf of.          | my-team-url-slug                                            |