# FiveHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTen } from "@vercel/sdk/models/fourhundredandthirtynine.js";

let value: FiveHundredAndTen = {
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
| `next`                                                                         | [models.UserEventPayload510Next](../models/usereventpayload510next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload510Previous](../models/usereventpayload510previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |