# FourHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNineteen } from "@vercel/sdk/models/fourhundredandseven.js";

let value: FourHundredAndNineteen = {
  previous: {
    enabled: true,
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
| `previous`                                                                     | [models.UserEventPayload419Previous](../models/usereventpayload419previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload419Next](../models/usereventpayload419next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |