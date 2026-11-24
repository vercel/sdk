# FiveHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndEleven } from "@vercel/sdk/models/fourhundredandforty.js";

let value: FiveHundredAndEleven = {
  next: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload511Next](../models/usereventpayload511next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload511Previous](../models/usereventpayload511previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |