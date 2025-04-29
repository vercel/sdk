# MoveProjectDomainRequest

## Example Usage

```typescript
import { MoveProjectDomainRequest } from "@vercel/sdk/models/moveprojectdomainop.js";

let value: MoveProjectDomainRequest = {
  idOrName: "<value>",
  domain: "www.example.com",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `idOrName`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The unique project identifier or the project name                                |                                                                                  |
| `domain`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | The project domain name                                                          | www.example.com                                                                  |
| `teamId`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | The Team identifier to perform the request on behalf of.                         | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                    |
| `slug`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The Team slug to perform the request on behalf of.                               | my-team-url-slug                                                                 |
| `requestBody`                                                                    | [models.MoveProjectDomainRequestBody](../models/moveprojectdomainrequestbody.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |