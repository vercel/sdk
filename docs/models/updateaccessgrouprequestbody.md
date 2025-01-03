# UpdateAccessGroupRequestBody

## Example Usage

```typescript
import { UpdateAccessGroupRequestBody } from "@vercel/sdk/models/updateaccessgroupop.js";

let value: UpdateAccessGroupRequestBody = {
  name: "My access group",
  projects: [
    {
      projectId: "prj_ndlgr43fadlPyCtREAqxxdyFK",
      role: "ADMIN",
    },
  ],
  membersToAdd: [
    "usr_1a2b3c4d5e6f7g8h9i0j",
    "usr_2b3c4d5e6f7g8h9i0j1k",
  ],
  membersToRemove: [
    "usr_1a2b3c4d5e6f7g8h9i0j",
    "usr_2b3c4d5e6f7g8h9i0j1k",
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | The name of the access group                               | My access group                                            |
| `projects`                                                 | [models.Projects](../models/projects.md)[]                 | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `membersToAdd`                                             | *string*[]                                                 | :heavy_minus_sign:                                         | List of members to add to the access group.                | [<br/>"usr_1a2b3c4d5e6f7g8h9i0j",<br/>"usr_2b3c4d5e6f7g8h9i0j1k"<br/>] |
| `membersToRemove`                                          | *string*[]                                                 | :heavy_minus_sign:                                         | List of members to remove from the access group.           | [<br/>"usr_1a2b3c4d5e6f7g8h9i0j",<br/>"usr_2b3c4d5e6f7g8h9i0j1k"<br/>] |