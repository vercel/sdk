# FourHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftySeven } from "@vercel/sdk/models/fourhundredandthirtyfour.js";

let value: FourHundredAndFiftySeven = {
  next: {
    enabled: true,
    totpVerified: true,
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
| `next`                                                                         | [models.UserEventPayload457Next](../models/usereventpayload457next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload457Previous](../models/usereventpayload457previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |