# GetSecurityFirewallEventsRequest

## Example Usage

```typescript
import { GetSecurityFirewallEventsRequest } from "@vercel/sdk/models/getsecurityfirewalleventsop.js";

let value: GetSecurityFirewallEventsRequest = {
  projectId: "<id>",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projectId`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `startTimestamp`                                         | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `endTimestamp`                                           | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `hosts`                                                  | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. | team_1a2b3c4d5e6f7g8h9i0j1k2l                            |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       | my-team-url-slug                                         |