# PayloadResources

## Example Usage

```typescript
import { PayloadResources } from "@vercel/sdk/models/usereventpayload26apikey.js";

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
| `projectIds`                                                                     | [models.UserEventPayload70ProjectIds](../models/usereventpayload70projectids.md) | :heavy_check_mark:                                                               | Specific project IDs or all projects on the team (`['*']`).                      |