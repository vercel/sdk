# GetProjectsPrincipal2

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { GetProjectsPrincipal2 } from "@vercel/sdk/models/getprojectstoprojectsresponse2001.js";

let value: GetProjectsPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `project`                                                                      | [models.GetProjectsPrincipalProject](../models/getprojectsprincipalproject.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | *"project"*                                                                    | :heavy_check_mark:                                                             | N/A                                                                            |