# FourHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirteen } from "@vercel/sdk/models/store.js";

let value: FourHundredAndThirteen = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `isSystemInitiated`                                                            | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload413Next](../models/usereventpayload413next.md)         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload413Previous](../models/usereventpayload413previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `reason`                                                                       | [models.PayloadReason](../models/payloadreason.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |