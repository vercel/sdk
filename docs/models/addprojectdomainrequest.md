# AddProjectDomainRequest

## Example Usage

```typescript
import { AddProjectDomainRequest } from "@vercel/sdk/models/addprojectdomainop.js";

let value: AddProjectDomainRequest = {
  idOrName: "<value>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    name: "www.example.com",
    gitBranch: null,
    redirect: "foobar.com",
    redirectStatusCode: 307,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `idOrName`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | The unique project identifier or the project name                              |                                                                                |
| `teamId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | The Team identifier to perform the request on behalf of.                       | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                  |
| `slug`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The Team slug to perform the request on behalf of.                             | my-team-url-slug                                                               |
| `requestBody`                                                                  | [models.AddProjectDomainRequestBody](../models/addprojectdomainrequestbody.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |