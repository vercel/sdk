# UpdateProjectCreator1

## Example Usage

```typescript
import { UpdateProjectCreator1 } from "@vercel/sdk/models/updateprojectbranchmatcher.js";

let value: UpdateProjectCreator1 = {
  type: "user",
  via: {
    type: "app",
    app: {
      id: "<id>",
    },
  },
  user: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | *"user"*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `via`                                                                    | *models.UpdateProjectCreatorVia*                                         | :heavy_check_mark:                                                       | N/A                                                                      |
| `user`                                                                   | [models.UpdateProjectCreatorUser](../models/updateprojectcreatoruser.md) | :heavy_check_mark:                                                       | N/A                                                                      |