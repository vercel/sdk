# NinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFive } from "@vercel/sdk/models/usereventpayloadresources.js";

let value: NinetyFive = {
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
| `action`                                                                 | [models.UserEventPayload95Action](../models/usereventpayload95action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | *models.UserEventPayloadData*                                            | :heavy_check_mark:                                                       | N/A                                                                      |