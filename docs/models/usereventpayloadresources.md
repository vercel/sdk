# UserEventPayloadResources

## Example Usage

```typescript
import { UserEventPayloadResources } from "@vercel/sdk/models/action.js";

let value: UserEventPayloadResources = {
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `projectIds`                                                                 | [models.UserEventPayloadProjectIds](../models/usereventpayloadprojectids.md) | :heavy_check_mark:                                                           | Specific project IDs or all projects on the team (`['*']`).                  |