# FourHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyFive } from "@vercel/sdk/models/usereventpayload385project.js";

let value: FourHundredAndThirtyFive = {
  next: {
    enabled: true,
    includeDrafts: false,
    scope: "private",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.UserEventPayload435Action](../models/usereventpayload435action.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `codeReviewSelection`                                                          | [models.PayloadCodeReviewSelection](../models/payloadcodereviewselection.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `endpoint`                                                                     | [models.UserEventPayload435Endpoint](../models/usereventpayload435endpoint.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload435Next](../models/usereventpayload435next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload435Previous](../models/usereventpayload435previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `source`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Caller-reported surface, not proof of a browser interaction or consent.        |