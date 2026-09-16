# FourHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyFour } from "@vercel/sdk/models/threehundredandninetynine.js";

let value: FourHundredAndTwentyFour = {
  next: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload424Next](../models/usereventpayload424next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload424Previous](../models/usereventpayload424previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |