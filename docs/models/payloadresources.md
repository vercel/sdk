# PayloadResources

## Example Usage

```typescript
import { PayloadResources } from "@vercel/sdk/models/userevent.js";

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
| `projectIds`                                                                     | [models.UserEventPayload26ProjectIds](../models/usereventpayload26projectids.md) | :heavy_check_mark:                                                               | N/A                                                                              |