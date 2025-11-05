# DeleteProjectClientCertRequest

## Example Usage

```typescript
import { DeleteProjectClientCertRequest } from "@vercel/sdk/models/deleteprojectclientcertop.js";

let value: DeleteProjectClientCertRequest = {
  idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
  certId: "cert_a1b2c3d4e5f6g7h8",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `idOrName`                                               | *string*                                                 | :heavy_check_mark:                                       | The unique project identifier or the project name        | prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA                         |
| `certId`                                                 | *string*                                                 | :heavy_check_mark:                                       | The certificate identifier                               | cert_a1b2c3d4e5f6g7h8                                    |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |