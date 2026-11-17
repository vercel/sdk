# FourHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEighteen } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: FourHundredAndEighteen = {
  next: {
    enabled: false,
    includeDrafts: true,
    scope: "private",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.UserEventPayload418Action](../models/usereventpayload418action.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `codeReviewSelection`                                                          | [models.PayloadCodeReviewSelection](../models/payloadcodereviewselection.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `endpoint`                                                                     | [models.UserEventPayload418Endpoint](../models/usereventpayload418endpoint.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload418Next](../models/usereventpayload418next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload418Previous](../models/usereventpayload418previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `source`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Caller-reported surface, not proof of a browser interaction or consent.        |