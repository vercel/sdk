# FourHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyOne } from "@vercel/sdk/models/usereventpayload465actortype.js";

let value: FourHundredAndEightyOne = {
  next: {
    enabled: true,
    totpVerified: false,
  },
  previous: {
    enabled: false,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload481Next](../models/usereventpayload481next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload481Previous](../models/usereventpayload481previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |