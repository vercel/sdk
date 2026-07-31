# ThreeHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventySix } from "@vercel/sdk/models/threehundredandsixty.js";

let value: ThreeHundredAndSeventySix = {
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
| `previous`                                                                     | [models.UserEventPayload376Previous](../models/usereventpayload376previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload376Next](../models/usereventpayload376next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |