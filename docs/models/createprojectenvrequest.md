# CreateProjectEnvRequest

## Example Usage

```typescript
import { CreateProjectEnvRequest } from "@vercel/sdk/models/createprojectenvop.js";

let value: CreateProjectEnvRequest = {
  idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
  upsert: "true",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: [
    {
      key: "API_URL",
      value: "https://api.vercel.com",
      type: "plain",
      target: [
        "preview",
      ],
      gitBranch: "feature-1",
      comment: "database connection string for production",
      customEnvironmentIds: [
        "env_1234567890",
      ],
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `idOrName`                                                  | *string*                                                    | :heavy_check_mark:                                          | The unique project identifier or the project name           | prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA                            |
| `upsert`                                                    | *string*                                                    | :heavy_minus_sign:                                          | Allow override of environment variable if it already exists | true                                                        |
| `teamId`                                                    | *string*                                                    | :heavy_minus_sign:                                          | The Team identifier to perform the request on behalf of.    | team_1a2b3c4d5e6f7g8h9i0j1k2l                               |
| `slug`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The Team slug to perform the request on behalf of.          | my-team-url-slug                                            |
| `requestBody`                                               | *models.CreateProjectEnvRequestBody*                        | :heavy_check_mark:                                          | N/A                                                         |                                                             |