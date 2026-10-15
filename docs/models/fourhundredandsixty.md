# FourHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixty } from "@vercel/sdk/models/env.js";

let value: FourHundredAndSixty = {
  next: {
    enabled: false,
    totpVerified: true,
  },
  previous: {
    enabled: true,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload460Next](../models/usereventpayload460next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload460Previous](../models/usereventpayload460previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |