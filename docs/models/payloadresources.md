# PayloadResources

## Example Usage

```typescript
import { PayloadResources } from "@vercel/sdk/models/newteam.js";

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
| `projectIds`                                                                     | [models.UserEventPayload34ProjectIds](../models/usereventpayload34projectids.md) | :heavy_check_mark:                                                               | N/A                                                                              |