# TwoHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyOne } from "@vercel/sdk/models/twohundredandtwentysix.js";

let value: TwoHundredAndSeventyOne = {
  next: {
    enabled: false,
    scope: "public",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload271Previous](../models/usereventpayload271previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload271Next](../models/usereventpayload271next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |