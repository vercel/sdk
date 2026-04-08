# TwoHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyFour } from "@vercel/sdk/models/twohundredandtwentysix.js";

let value: TwoHundredAndSeventyFour = {
  previous: {
    enabled: true,
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
| `previous`                                                                     | [models.UserEventPayload274Previous](../models/usereventpayload274previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload274Next](../models/usereventpayload274next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |