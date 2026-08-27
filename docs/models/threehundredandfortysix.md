# ThreeHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortySix } from "@vercel/sdk/models/usereventpayload328names.js";

let value: ThreeHundredAndFortySix = {
  next: {
    enabled: false,
    scope: "public",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload346Previous](../models/usereventpayload346previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload346Next](../models/usereventpayload346next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |