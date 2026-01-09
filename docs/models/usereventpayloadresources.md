# UserEventPayloadResources

## Example Usage

```typescript
import { UserEventPayloadResources } from "@vercel/sdk/models/userevent.js";

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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `projectIds`                                                                       | [models.UserEventPayload170ProjectIds](../models/usereventpayload170projectids.md) | :heavy_check_mark:                                                                 | N/A                                                                                |