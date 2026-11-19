# FourHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyNine } from "@vercel/sdk/models/usereventpayloadtargetkind.js";

let value: FourHundredAndNinetyNine = {
  next: {
    enabled: false,
    totpVerified: true,
  },
  previous: {
    enabled: true,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `method`                                                                       | [models.PayloadMethod](../models/payloadmethod.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload499Next](../models/usereventpayload499next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload499Previous](../models/usereventpayload499previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |