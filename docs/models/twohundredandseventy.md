# TwoHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventy } from "@vercel/sdk/models/usereventpayload221previous.js";

let value: TwoHundredAndSeventy = {
  previous: {
    enabled: true,
    totpVerified: false,
  },
  next: {
    enabled: false,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload270Previous](../models/usereventpayload270previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload270Next](../models/usereventpayload270next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |