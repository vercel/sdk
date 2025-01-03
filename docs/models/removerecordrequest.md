# RemoveRecordRequest

## Example Usage

```typescript
import { RemoveRecordRequest } from "@vercel/sdk/models/removerecordop.js";

let value: RemoveRecordRequest = {
  domain: "example.com",
  recordId: "rec_V0fra8eEgQwEpFhYG2vTzC3K",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `domain`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | example.com                                              |
| `recordId`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | rec_V0fra8eEgQwEpFhYG2vTzC3K                             |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |