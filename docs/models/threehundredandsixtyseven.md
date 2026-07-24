# ThreeHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtySeven } from "@vercel/sdk/models/threehundredandfortyone.js";

let value: ThreeHundredAndSixtySeven = {
  previous: {
    enabled: false,
    totpVerified: true,
  },
  next: {
    enabled: true,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload367Previous](../models/usereventpayload367previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload367Next](../models/usereventpayload367next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |