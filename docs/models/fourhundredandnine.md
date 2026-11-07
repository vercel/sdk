# FourHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNine } from "@vercel/sdk/models/usereventpayload403type.js";

let value: FourHundredAndNine = {
  next: {
    enabled: true,
    includeDrafts: false,
    scope: "all",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.UserEventPayload409Action](../models/usereventpayload409action.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `codeReviewSelection`                                                          | [models.PayloadCodeReviewSelection](../models/payloadcodereviewselection.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `endpoint`                                                                     | [models.UserEventPayload409Endpoint](../models/usereventpayload409endpoint.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload409Next](../models/usereventpayload409next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload409Previous](../models/usereventpayload409previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `source`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Caller-reported surface, not proof of a browser interaction or consent.        |