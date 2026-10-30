# FourHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndOne } from "@vercel/sdk/models/usereventpayload390type.js";

let value: FourHundredAndOne = {
  next: {
    enabled: false,
    includeDrafts: false,
    scope: "all",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload401Next](../models/usereventpayload401next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload401Previous](../models/usereventpayload401previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |