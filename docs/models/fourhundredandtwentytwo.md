# FourHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyTwo } from "@vercel/sdk/models/payloadcodereviewselection.js";

let value: FourHundredAndTwentyTwo = {
  next: "auto-approval",
  previous: "auto-approval",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload422Next](../models/usereventpayload422next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload422Previous](../models/usereventpayload422previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |