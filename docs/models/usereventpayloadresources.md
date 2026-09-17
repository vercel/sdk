# UserEventPayloadResources

## Example Usage

```typescript
import { UserEventPayloadResources } from "@vercel/sdk/models/retention.js";

let value: UserEventPayloadResources = {
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `projectIds`                                                                 | [models.UserEventPayloadProjectIds](../models/usereventpayloadprojectids.md) | :heavy_check_mark:                                                           | Specific project IDs or all projects on the team (`['*']`).                  |