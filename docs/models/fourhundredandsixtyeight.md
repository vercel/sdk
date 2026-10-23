# FourHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyEight } from "@vercel/sdk/models/fourhundredandfortynine.js";

let value: FourHundredAndSixtyEight = {
  next: {
    enabled: false,
    totpVerified: false,
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
| `next`                                                                         | [models.UserEventPayload468Next](../models/usereventpayload468next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload468Previous](../models/usereventpayload468previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |