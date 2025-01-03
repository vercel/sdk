# CheckDomainStatusRequest

## Example Usage

```typescript
import { CheckDomainStatusRequest } from "@vercel/sdk/models/checkdomainstatusop.js";

let value: CheckDomainStatusRequest = {
  name: "example.com",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `name`                                                              | *string*                                                            | :heavy_check_mark:                                                  | The name of the domain for which we would like to check the status. | example.com                                                         |
| `teamId`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | The Team identifier to perform the request on behalf of.            | team_1a2b3c4d5e6f7g8h9i0j1k2l                                       |
| `slug`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | The Team slug to perform the request on behalf of.                  | my-team-url-slug                                                    |