# Resources

## Example Usage

```typescript
import { Resources } from "@vercel/sdk/models/nineteen.js";

let value: Resources = {
  projectIds: {
    type: "list",
    required: true,
    items: {
      type: "string",
    },
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `projectIds`                                                | [models.PayloadProjectIds](../models/payloadprojectids.md)  | :heavy_check_mark:                                          | Specific project IDs or all projects on the team (`['*']`). |