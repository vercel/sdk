# FourHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyFive } from "@vercel/sdk/models/usereventpayload469actortype.js";

let value: FourHundredAndEightyFive = {
  next: {
    enabled: true,
    totpVerified: false,
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
| `next`                                                                         | [models.UserEventPayload485Next](../models/usereventpayload485next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload485Previous](../models/usereventpayload485previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |