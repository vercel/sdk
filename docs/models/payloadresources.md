# PayloadResources

## Example Usage

```typescript
import { PayloadResources } from "@vercel/sdk/models/eighteen.js";

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
| `projectIds`                                                                     | [models.UserEventPayload53ProjectIds](../models/usereventpayload53projectids.md) | :heavy_check_mark:                                                               | Specific project IDs or all projects on the team (`['*']`).                      |