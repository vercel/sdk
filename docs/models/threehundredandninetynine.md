# ThreeHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyNine } from "@vercel/sdk/models/usereventpayload387scope.js";

let value: ThreeHundredAndNinetyNine = {
  next: {
    enabled: true,
    includeDrafts: false,
    scope: "private",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload399Next](../models/usereventpayload399next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload399Previous](../models/usereventpayload399previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |