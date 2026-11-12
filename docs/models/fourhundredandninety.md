# FourHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinety } from "@vercel/sdk/models/usereventpayload474actortype.js";

let value: FourHundredAndNinety = {
  next: {
    enabled: false,
    totpVerified: true,
  },
  previous: {
    enabled: false,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload490Next](../models/usereventpayload490next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload490Previous](../models/usereventpayload490previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |