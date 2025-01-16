# GetBypassIpRequest

## Example Usage

```typescript
import { GetBypassIpRequest } from "@vercel/sdk/models/getbypassipop.js";

let value: GetBypassIpRequest = {
  projectId: "<id>",
  limit: 10,
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `projectId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          | 10                                                           |
| `sourceIp`                                                   | *string*                                                     | :heavy_minus_sign:                                           | Filter by source IP                                          |                                                              |
| `domain`                                                     | *string*                                                     | :heavy_minus_sign:                                           | Filter by domain                                             |                                                              |
| `projectScope`                                               | *boolean*                                                    | :heavy_minus_sign:                                           | Filter by project scoped rules                               |                                                              |
| `offset`                                                     | *string*                                                     | :heavy_minus_sign:                                           | Used for pagination. Retrieves results after the provided id |                                                              |
| `teamId`                                                     | *string*                                                     | :heavy_minus_sign:                                           | The Team identifier to perform the request on behalf of.     | team_1a2b3c4d5e6f7g8h9i0j1k2l                                |
| `slug`                                                       | *string*                                                     | :heavy_minus_sign:                                           | The Team slug to perform the request on behalf of.           | my-team-url-slug                                             |