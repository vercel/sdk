# FourHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyFive } from "@vercel/sdk/models/threehundredandseventyfive.js";

let value: FourHundredAndTwentyFive = {
  next: {
    enabled: true,
    includeDrafts: false,
    scope: "public",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.UserEventPayload425Action](../models/usereventpayload425action.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `codeReviewSelection`                                                          | [models.PayloadCodeReviewSelection](../models/payloadcodereviewselection.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `endpoint`                                                                     | [models.UserEventPayload425Endpoint](../models/usereventpayload425endpoint.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload425Next](../models/usereventpayload425next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload425Previous](../models/usereventpayload425previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `source`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Caller-reported surface, not proof of a browser interaction or consent.        |