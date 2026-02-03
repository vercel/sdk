# ListBillingChargesRequest

## Example Usage

```typescript
import { ListBillingChargesRequest } from "@vercel/sdk/models/listbillingchargesop.js";

let value: ListBillingChargesRequest = {
  from: "2025-01-01T00:00:00.000Z",
  to: "2025-01-31T00:00:00.000Z",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `from`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Inclusive start of the date range as an ISO 8601 date-time string in UTC. | 2025-01-01T00:00:00.000Z                                                  |
| `to`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | Exclusive end of the date range as an ISO 8601 date-time string in UTC.   | 2025-01-31T00:00:00.000Z                                                  |
| `teamId`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | The Team identifier to perform the request on behalf of.                  | team_1a2b3c4d5e6f7g8h9i0j1k2l                                             |
| `slug`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | The Team slug to perform the request on behalf of.                        | my-team-url-slug                                                          |