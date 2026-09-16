# ListAccessGroupMembersResponseBody

## Example Usage

```typescript
import { ListAccessGroupMembersResponseBody } from "@vercel/sdk/models/listaccessgroupmembersop.js";

let value: ListAccessGroupMembersResponseBody = {
  members: [
    {
      email: "Felicity63@yahoo.com",
      teamRole: "CONTRIBUTOR",
      uid: "<id>",
      username: "Doyle89",
    },
  ],
  pagination: {
    count: 4548.78,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `members`                                                                                | [models.Members](../models/members.md)[]                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pagination`                                                                             | [models.ListAccessGroupMembersPagination](../models/listaccessgroupmemberspagination.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |