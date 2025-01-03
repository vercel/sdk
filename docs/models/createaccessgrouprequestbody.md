# CreateAccessGroupRequestBody

## Example Usage

```typescript
import { CreateAccessGroupRequestBody } from "@vercel/sdk/models/createaccessgroupop.js";

let value: CreateAccessGroupRequestBody = {
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name of the access group                                                 | My access group                                                              |
| `projects`                                                                   | [models.CreateAccessGroupProjects](../models/createaccessgroupprojects.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `membersToAdd`                                                               | *string*[]                                                                   | :heavy_minus_sign:                                                           | List of members to add to the access group.                                  | [<br/>"usr_1a2b3c4d5e6f7g8h9i0j",<br/>"usr_2b3c4d5e6f7g8h9i0j1k"<br/>]       |