# Creator1

## Example Usage

```typescript
import { Creator1 } from "@vercel/sdk/models/createprojectcontenthint2.js";

let value: Creator1 = {
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

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `type`                                         | *"user"*                                       | :heavy_check_mark:                             | N/A                                            |
| `via`                                          | *models.CreatorVia*                            | :heavy_check_mark:                             | N/A                                            |
| `user`                                         | [models.CreatorUser](../models/creatoruser.md) | :heavy_check_mark:                             | N/A                                            |