# FiveHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFour } from "@vercel/sdk/models/usereventpayloadtargetkind.js";

let value: FiveHundredAndFour = {
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
| `next`                                                                         | [models.UserEventPayload504Next](../models/usereventpayload504next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload504Previous](../models/usereventpayload504previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |