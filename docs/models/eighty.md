# Eighty

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighty } from "@vercel/sdk/models/settlementmethod.js";

let value: Eighty = {
  action: "cancel_plan",
  data: {
    planSlug: "hobby",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload80Action](../models/usereventpayload80action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | *models.UserEventPayloadData*                                            | :heavy_check_mark:                                                       | N/A                                                                      |