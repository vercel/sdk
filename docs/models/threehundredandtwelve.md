# ThreeHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwelve } from "@vercel/sdk/models/payloadenvironment.js";

let value: ThreeHundredAndTwelve = {
  previous: {
    enabled: true,
    totpVerified: false,
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
| `previous`                                                                     | [models.UserEventPayload312Previous](../models/usereventpayload312previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload312Next](../models/usereventpayload312next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |