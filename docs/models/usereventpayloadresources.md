# UserEventPayloadResources

## Example Usage

```typescript
import { UserEventPayloadResources } from "@vercel/sdk/models/payloadprojectids.js";

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
| `projectIds`                                                                       | [models.UserEventPayload236ProjectIds](../models/usereventpayload236projectids.md) | :heavy_check_mark:                                                                 | N/A                                                                                |