# FourHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyTwo } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FourHundredAndNinetyTwo = {
  next: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload492Next](../models/usereventpayload492next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload492Previous](../models/usereventpayload492previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |