# CreateRecordRequest

## Example Usage

```typescript
import { CreateRecordRequest } from "@vercel/sdk/models/createrecordop.js";

let value: CreateRecordRequest = {
  domain: "example.com",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    type: "ALIAS",
    ttl: 60,
    srv: {
      priority: 10,
      weight: 10,
      port: 5000,
      target: "host.example.com",
    },
    comment: "used to verify ownership of domain",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `domain`                                                 | *string*                                                 | :heavy_check_mark:                                       | The domain used to create the DNS record.                | example.com                                              |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |
| `requestBody`                                            | *models.CreateRecordRequestBody*                         | :heavy_check_mark:                                       | N/A                                                      |                                                          |