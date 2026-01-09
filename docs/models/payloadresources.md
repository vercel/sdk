# PayloadResources

## Example Usage

```typescript
import { PayloadResources } from "@vercel/sdk/models/userevent.js";

let value: PayloadResources = {
  projectIds: {
    type: "list",
    required: false,
    items: {
      type: "string",
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `projectIds`                                                                 | [models.UserEventPayloadProjectIds](../models/usereventpayloadprojectids.md) | :heavy_check_mark:                                                           | N/A                                                                          |