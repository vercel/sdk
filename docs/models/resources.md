# Resources

## Example Usage

```typescript
import { Resources } from "@vercel/sdk/models/retention.js";

let value: Resources = {
  projectIds: {
    items: {
      type: "string",
    },
    required: true,
    type: "list",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `projectIds`                                                | [models.PayloadProjectIds](../models/payloadprojectids.md)  | :heavy_check_mark:                                          | Specific project IDs or all projects on the team (`['*']`). |