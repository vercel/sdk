# BatchRemoveProjectEnvRequest

## Example Usage

```typescript
import { BatchRemoveProjectEnvRequest } from "@vercel/sdk/models/batchremoveprojectenvop.js";

let value: BatchRemoveProjectEnvRequest = {
  idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `idOrName`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | The unique project identifier or the project name                                        | prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA                                                         |
| `teamId`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Team identifier to perform the request on behalf of.                                 | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                            |
| `slug`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Team slug to perform the request on behalf of.                                       | my-team-url-slug                                                                         |
| `requestBody`                                                                            | [models.BatchRemoveProjectEnvRequestBody](../models/batchremoveprojectenvrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |