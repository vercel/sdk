# ListAccessGroupsResponseBody2

## Example Usage

```typescript
import { ListAccessGroupsResponseBody2 } from "@vercel/sdk/models/listaccessgroupsop.js";

let value: ListAccessGroupsResponseBody2 = {
  accessGroups: [
    {
      accessGroupId: "ag_123a6c5209bc3778245d011443644c8d27dc2c50",
      createdAt: "1588720733602",
      isDsyncManaged: true,
      membersCount: 5,
      name: "my-access-group",
      projectsCount: 2,
      teamId: "team_123a6c5209bc3778245d011443644c8d27dc2c50",
      teamRoles: [
        "DEVELOPER",
        "BILLING",
      ],
      updatedAt: "1588720733602",
    },
  ],
  pagination: {
    count: 2726.07,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accessGroups`                                                       | [models.AccessGroups](../models/accessgroups.md)[]                   | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [models.ResponseBodyPagination](../models/responsebodypagination.md) | :heavy_check_mark:                                                   | N/A                                                                  |