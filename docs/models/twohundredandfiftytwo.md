# TwoHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyTwo } from "@vercel/sdk/models/twohundredandfortyseven.js";

let value: TwoHundredAndFiftyTwo = {
  next: {
    enabled: false,
    scope: "private",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload252Previous](../models/usereventpayload252previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload252Next](../models/usereventpayload252next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |