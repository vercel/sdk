# GetSecurityFirewallEventsPagination

## Example Usage

```typescript
import { GetSecurityFirewallEventsPagination } from "@vercel/sdk/models/getsecurityfirewalleventsop.js";

let value: GetSecurityFirewallEventsPagination = {
  hasMore: true,
  next: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `hasMore`                                                             | *boolean*                                                             | :heavy_check_mark:                                                    | N/A                                                                   |
| `next`                                                                | *string*                                                              | :heavy_check_mark:                                                    | Pass as `cursor` to fetch the next page; null when there are no more. |