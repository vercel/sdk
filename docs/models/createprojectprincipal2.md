# CreateProjectPrincipal2

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { CreateProjectPrincipal2 } from "@vercel/sdk/models/createprojectprojectsoidctokenclaims.js";

let value: CreateProjectPrincipal2 = {
  project: {
    id: "<id>",
  },
  type: "project",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `project`                                                                          | [models.CreateProjectPrincipalProject](../models/createprojectprincipalproject.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | *"project"*                                                                        | :heavy_check_mark:                                                                 | N/A                                                                                |