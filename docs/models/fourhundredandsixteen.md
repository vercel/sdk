# FourHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixteen } from "@vercel/sdk/models/fourhundredandfour.js";

let value: FourHundredAndSixteen = {
  previous: {
    enabled: false,
    totpVerified: true,
  },
  next: {
    enabled: true,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload416Previous](../models/usereventpayload416previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload416Next](../models/usereventpayload416next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |