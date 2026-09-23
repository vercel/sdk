# GetMicrofrontendsInGroupCreator1

## Example Usage

```typescript
import { GetMicrofrontendsInGroupCreator1 } from "@vercel/sdk/models/getmicrofrontendsingroupgitprovideroptions.js";

let value: GetMicrofrontendsInGroupCreator1 = {
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | *"user"*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `via`                                                                                          | *models.GetMicrofrontendsInGroupCreatorVia*                                                    | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `user`                                                                                         | [models.GetMicrofrontendsInGroupCreatorUser](../models/getmicrofrontendsingroupcreatoruser.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |