# PayloadResources

## Example Usage

```typescript
import { PayloadResources } from "@vercel/sdk/models/usereventpayload22provider.js";

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
| `projectIds`                                                                     | [models.UserEventPayload69ProjectIds](../models/usereventpayload69projectids.md) | :heavy_check_mark:                                                               | Specific project IDs or all projects on the team (`['*']`).                      |