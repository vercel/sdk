# FourHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEight } from "@vercel/sdk/models/threehundredandninetysix.js";

let value: FourHundredAndEight = {
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
| `previous`                                                                     | [models.UserEventPayload408Previous](../models/usereventpayload408previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload408Next](../models/usereventpayload408next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |