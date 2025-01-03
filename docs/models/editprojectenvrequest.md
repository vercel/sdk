# EditProjectEnvRequest

## Example Usage

```typescript
import { EditProjectEnvRequest } from "@vercel/sdk/models/editprojectenvop.js";

let value: EditProjectEnvRequest = {
  idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
  id: "XMbOEya1gUUO1ir4",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    key: "GITHUB_APP_ID",
    target: [
      "preview",
    ],
    gitBranch: "feature-1",
    type: "plain",
    value: "bkWIjbnxcvo78",
    customEnvironmentIds: [
      "env_1234567890",
    ],
    comment: "database connection string for production",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `idOrName`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | The unique project identifier or the project name                          | prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA                                           |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The unique environment variable identifier                                 | XMbOEya1gUUO1ir4                                                           |
| `teamId`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | The Team identifier to perform the request on behalf of.                   | team_1a2b3c4d5e6f7g8h9i0j1k2l                                              |
| `slug`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | The Team slug to perform the request on behalf of.                         | my-team-url-slug                                                           |
| `requestBody`                                                              | [models.EditProjectEnvRequestBody](../models/editprojectenvrequestbody.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |