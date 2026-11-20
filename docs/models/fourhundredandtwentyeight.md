# FourHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyEight } from "@vercel/sdk/models/oldssoprotection2.js";

let value: FourHundredAndTwentyEight = {
  next: {
    enabled: false,
  },
  previous: {
    enabled: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload428Next](../models/usereventpayload428next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload428Previous](../models/usereventpayload428previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |