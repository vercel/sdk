# GetProjectsCreator1

## Example Usage

```typescript
import { GetProjectsCreator1 } from "@vercel/sdk/models/getprojectslogheaders2.js";

let value: GetProjectsCreator1 = {
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

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | *"user"*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `via`                                                                | *models.GetProjectsCreatorVia*                                       | :heavy_check_mark:                                                   | N/A                                                                  |
| `user`                                                               | [models.GetProjectsCreatorUser](../models/getprojectscreatoruser.md) | :heavy_check_mark:                                                   | N/A                                                                  |