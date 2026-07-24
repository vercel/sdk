# GetMicrofrontendsInGroupCreator1

## Example Usage

```typescript
import { GetMicrofrontendsInGroupCreator1 } from "@vercel/sdk/models/getmicrofrontendsingroupaliasassigned.js";

let value: GetMicrofrontendsInGroupCreator1 = {
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | *"user"*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `via`                                                                                          | *models.GetMicrofrontendsInGroupCreatorVia*                                                    | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `user`                                                                                         | [models.GetMicrofrontendsInGroupCreatorUser](../models/getmicrofrontendsingroupcreatoruser.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |