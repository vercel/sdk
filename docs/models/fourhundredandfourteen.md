# FourHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFourteen } from "@vercel/sdk/models/fourhundredandtwo.js";

let value: FourHundredAndFourteen = {
  previous: {
    enabled: false,
    totpVerified: false,
  },
  next: {
    enabled: false,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload414Previous](../models/usereventpayload414previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload414Next](../models/usereventpayload414next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |