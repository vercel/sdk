# UpdateMicrofrontendsCreator1

## Example Usage

```typescript
import { UpdateMicrofrontendsCreator1 } from "@vercel/sdk/models/updatemicrofrontendscreatedeployments.js";

let value: UpdateMicrofrontendsCreator1 = {
  type: "user",
  via: {
    app: {
      id: "<id>",
    },
    type: "app",
  },
  user: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | *"user"*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `via`                                                                                  | *models.UpdateMicrofrontendsCreatorVia*                                                | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `user`                                                                                 | [models.UpdateMicrofrontendsCreatorUser](../models/updatemicrofrontendscreatoruser.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |