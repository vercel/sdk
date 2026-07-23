# GetProjectCreator1

## Example Usage

```typescript
import { GetProjectCreator1 } from "@vercel/sdk/models/getprojectapril2026securityincidentmigrationappliedfrom.js";

let value: GetProjectCreator1 = {
  type: "user",
  via: {
    type: "integration",
    integration: {
      integrationId: "<id>",
      configurationId: "<id>",
    },
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