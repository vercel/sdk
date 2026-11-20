# FourHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentySix } from "@vercel/sdk/models/oldssoprotection2.js";

let value: FourHundredAndTwentySix = {
  next: {
    enabled: true,
    includeDrafts: false,
    scope: "selected_repos",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.UserEventPayload426Action](../models/usereventpayload426action.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `codeReviewSelection`                                                          | [models.PayloadCodeReviewSelection](../models/payloadcodereviewselection.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `endpoint`                                                                     | [models.UserEventPayload426Endpoint](../models/usereventpayload426endpoint.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload426Next](../models/usereventpayload426next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload426Previous](../models/usereventpayload426previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `source`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Caller-reported surface, not proof of a browser interaction or consent.        |