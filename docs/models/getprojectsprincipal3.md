# GetProjectsPrincipal3

The principal who rolled back the project. Absent on historical rollbacks where the principal was a user (in this case, see `userId`).

## Example Usage

```typescript
import { GetProjectsPrincipal3 } from "@vercel/sdk/models/getprojectstoprojectsresponse2001.js";

let value: GetProjectsPrincipal3 = {
  app: {
    id: "<id>",
  },
  type: "app",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `app`                                                                  | [models.GetProjectsPrincipalApp](../models/getprojectsprincipalapp.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | *"app"*                                                                | :heavy_check_mark:                                                     | N/A                                                                    |