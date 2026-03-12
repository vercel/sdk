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
| `projectIds`                                                                     | [models.UserEventPayload25ProjectIds](../models/usereventpayload25projectids.md) | :heavy_check_mark:                                                               | N/A                                                                              |