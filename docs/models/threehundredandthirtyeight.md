# ThreeHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyEight } from "@vercel/sdk/models/addedprojects.js";

let value: ThreeHundredAndThirtyEight = {
  next: {
    enabled: true,
    scope: "all",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload338Previous](../models/usereventpayload338previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload338Next](../models/usereventpayload338next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |