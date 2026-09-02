# FourHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFifteen } from "@vercel/sdk/models/fourhundredandthree.js";

let value: FourHundredAndFifteen = {
  previous: {
    enabled: true,
    totpVerified: true,
  },
  next: {
    enabled: true,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload415Previous](../models/usereventpayload415previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload415Next](../models/usereventpayload415next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |