# UpdateProjectDomainRequest

## Example Usage

```typescript
import { UpdateProjectDomainRequest } from "@vercel/sdk/models/updateprojectdomainop.js";

let value: UpdateProjectDomainRequest = {
  idOrName: "<value>",
  domain: "www.example.com",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    gitBranch: null,
    redirect: "foobar.com",
    redirectStatusCode: 307,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `idOrName`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | The unique project identifier or the project name                                    |                                                                                      |
| `domain`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | The project domain name                                                              | www.example.com                                                                      |
| `teamId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | The Team identifier to perform the request on behalf of.                             | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                        |
| `slug`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | The Team slug to perform the request on behalf of.                                   | my-team-url-slug                                                                     |
| `requestBody`                                                                        | [models.UpdateProjectDomainRequestBody](../models/updateprojectdomainrequestbody.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |