# PayloadResources

## Example Usage

```typescript
import { PayloadResources } from "@vercel/sdk/models/piiredaction.js";

let value: PayloadResources = {
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `projectIds`                                                                     | [models.UserEventPayload54ProjectIds](../models/usereventpayload54projectids.md) | :heavy_check_mark:                                                               | Specific project IDs or all projects on the team (`['*']`).                      |