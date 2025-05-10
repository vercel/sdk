# Team

Data representing a Team.

## Example Usage

```typescript
import { Team } from "@vercel/sdk/models/team.js";

let value: Team = {
  id: "ABCDEFG000011111",
  data: {
    query: "<value>",
    creatorId: "<id>",
    title: "<value>",
    groupId: "<id>",
    ownerId: "<id>",
    projectId: "<id>",
    createdAt: 7981.17,
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | The Preset's unique identifier.  | ABCDEFG000011111                 |
| `data`                           | [models.Data](../models/data.md) | :heavy_check_mark:               | N/A                              |                                  |
| `additionalProperties`           | Record<string, *any*>            | :heavy_minus_sign:               | N/A                              |                                  |