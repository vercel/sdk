# TwoHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtySeven } from "@vercel/sdk/models/twohundredandtwentysix.js";

let value: TwoHundredAndThirtySeven = {
  next: {
    enabled: false,
    scope: "selected_repos",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload237Previous](../models/usereventpayload237previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload237Next](../models/usereventpayload237next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |