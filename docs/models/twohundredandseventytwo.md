# TwoHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyTwo } from "@vercel/sdk/models/twohundredandtwentyfour.js";

let value: TwoHundredAndSeventyTwo = {
  previous: {
    enabled: false,
    totpVerified: true,
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
| `previous`                                                                     | [models.UserEventPayload272Previous](../models/usereventpayload272previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload272Next](../models/usereventpayload272next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |