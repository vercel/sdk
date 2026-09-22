# GetProjectCreator1

## Example Usage

```typescript
import { GetProjectCreator1 } from "@vercel/sdk/models/getprojectintegrations.js";

let value: GetProjectCreator1 = {
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *"user"*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `via`                                                              | *models.GetProjectCreatorVia*                                      | :heavy_check_mark:                                                 | N/A                                                                |
| `user`                                                             | [models.GetProjectCreatorUser](../models/getprojectcreatoruser.md) | :heavy_check_mark:                                                 | N/A                                                                |