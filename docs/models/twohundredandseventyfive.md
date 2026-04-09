# TwoHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyFive } from "@vercel/sdk/models/twohundredandtwentyseven.js";

let value: TwoHundredAndSeventyFive = {
  previous: {
    enabled: true,
    totpVerified: true,
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
| `previous`                                                                     | [models.UserEventPayload275Previous](../models/usereventpayload275previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload275Next](../models/usereventpayload275next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |