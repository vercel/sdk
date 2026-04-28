# PayloadResources

## Example Usage

```typescript
import { PayloadResources } from "@vercel/sdk/models/payload1.js";

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
| `projectIds`                                                                     | [models.UserEventPayload28ProjectIds](../models/usereventpayload28projectids.md) | :heavy_check_mark:                                                               | N/A                                                                              |