# FourHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwo } from "@vercel/sdk/models/usereventpayload391type.js";

let value: FourHundredAndTwo = {
  next: {
    enabled: true,
    includeDrafts: true,
    scope: "selected_repos",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload402Next](../models/usereventpayload402next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload402Previous](../models/usereventpayload402previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |