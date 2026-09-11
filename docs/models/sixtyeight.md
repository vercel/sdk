# SixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyEight } from "@vercel/sdk/models/payloadrule.js";

let value: SixtyEight = {
  action: "resume_plan",
  data: {
    planSlug: "v0_business",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload68Action](../models/usereventpayload68action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | [models.PayloadData](../models/payloaddata.md)                           | :heavy_check_mark:                                                       | N/A                                                                      |