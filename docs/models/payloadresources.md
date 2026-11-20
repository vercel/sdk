# PayloadResources

## Example Usage

```typescript
import { PayloadResources } from "@vercel/sdk/models/twenty.js";

let value: PayloadResources = {
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `projectIds`                                                                     | [models.UserEventPayload80ProjectIds](../models/usereventpayload80projectids.md) | :heavy_check_mark:                                                               | Specific project IDs or all projects on the team (`['*']`).                      |