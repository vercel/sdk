# Resources

## Example Usage

```typescript
import { Resources } from "@vercel/sdk/models/payload1.js";

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

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `projectIds`                                               | [models.PayloadProjectIds](../models/payloadprojectids.md) | :heavy_check_mark:                                         | N/A                                                        |