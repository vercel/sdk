# TwoHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyFour } from "@vercel/sdk/models/twohundredandthirtysix.js";

let value: TwoHundredAndEightyFour = {
  previous: {
    enabled: false,
    totpVerified: false,
  },
  next: {
    enabled: false,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload284Previous](../models/usereventpayload284previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload284Next](../models/usereventpayload284next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |