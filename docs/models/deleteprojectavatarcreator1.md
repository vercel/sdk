# DeleteProjectAvatarCreator1

## Example Usage

```typescript
import { DeleteProjectAvatarCreator1 } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarCreator1 = {
  type: "user",
  via: {
    integration: {
      configurationId: "<id>",
      integrationId: "<id>",
    },
    type: "integration",
  },
  user: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *"user"*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `via`                                                                                | *models.DeleteProjectAvatarCreatorVia*                                               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `user`                                                                               | [models.DeleteProjectAvatarCreatorUser](../models/deleteprojectavatarcreatoruser.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |