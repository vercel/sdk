# GetProjectsCreatorProjects1

## Example Usage

```typescript
import { GetProjectsCreatorProjects1 } from "@vercel/sdk/models/getprojectsresponsebodyconsolidatedgitcommitstatus.js";

let value: GetProjectsCreatorProjects1 = {
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *"user"*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `via`                                                                                | *models.GetProjectsCreatorProjectsVia*                                               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `user`                                                                               | [models.GetProjectsCreatorProjectsUser](../models/getprojectscreatorprojectsuser.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |