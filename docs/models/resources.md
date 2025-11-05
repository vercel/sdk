# Resources

## Example Usage

```typescript
import { Resources } from "@vercel/sdk/models/userevent.js";

let value: Resources = {
  projectIds: {
    type: "list",
    required: false,
    items: {
      type: "string",
    },
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `projectIds`                                 | [models.ProjectIds](../models/projectids.md) | :heavy_check_mark:                           | N/A                                          |