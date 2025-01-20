# ListAccessGroupMembersResponseBody

## Example Usage

```typescript
import { ListAccessGroupMembersResponseBody } from "@vercel/sdk/models/listaccessgroupmembersop.js";

let value: ListAccessGroupMembersResponseBody = {
  members: [
    {
      email: "Sarah_Schmidt-Koepp@hotmail.com",
      uid: "<id>",
      username: "Buck26",
      teamRole: "DEVELOPER",
    },
  ],
  pagination: {
    count: 5684.34,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `members`                                                                                | [models.Members](../models/members.md)[]                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pagination`                                                                             | [models.ListAccessGroupMembersPagination](../models/listaccessgroupmemberspagination.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |