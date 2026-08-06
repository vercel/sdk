# ThreeHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyNine } from "@vercel/sdk/models/usereventpayload372previous.js";

let value: ThreeHundredAndEightyNine = {
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
| `previous`                                                                     | [models.UserEventPayload389Previous](../models/usereventpayload389previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload389Next](../models/usereventpayload389next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |