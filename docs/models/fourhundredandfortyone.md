# FourHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyOne } from "@vercel/sdk/models/fourhundredandsixteen.js";

let value: FourHundredAndFortyOne = {
  next: {
    enabled: false,
    totpVerified: false,
  },
  previous: {
    enabled: false,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload441Next](../models/usereventpayload441next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload441Previous](../models/usereventpayload441previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |