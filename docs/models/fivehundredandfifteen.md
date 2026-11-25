# FiveHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFifteen } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: FiveHundredAndFifteen = {
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
| `next`                                                                         | [models.UserEventPayload515Next](../models/usereventpayload515next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload515Previous](../models/usereventpayload515previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |