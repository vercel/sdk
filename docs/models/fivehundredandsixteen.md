# FiveHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndSixteen } from "@vercel/sdk/models/fourhundredandfortyfive.js";

let value: FiveHundredAndSixteen = {
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
| `next`                                                                         | [models.UserEventPayload516Next](../models/usereventpayload516next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload516Previous](../models/usereventpayload516previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |