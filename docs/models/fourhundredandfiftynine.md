# FourHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyNine } from "@vercel/sdk/models/env.js";

let value: FourHundredAndFiftyNine = {
  next: {
    enabled: false,
    totpVerified: false,
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
| `next`                                                                         | [models.UserEventPayload459Next](../models/usereventpayload459next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload459Previous](../models/usereventpayload459previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |