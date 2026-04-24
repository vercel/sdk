# Job

## Example Usage

```typescript
import { Job } from "@vercel/sdk/models/userevent.js";

let value: Job = {
  deployHook: {
    createdAt: 3393.49,
    id: "<id>",
    name: "<value>",
    ref: "<value>",
  },
  state: "Idaho",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `deployHook`                                 | [models.DeployHook](../models/deployhook.md) | :heavy_check_mark:                           | N/A                                          |
| `state`                                      | *string*                                     | :heavy_check_mark:                           | N/A                                          |