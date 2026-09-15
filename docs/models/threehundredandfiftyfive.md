# ThreeHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyFive } from "@vercel/sdk/models/threehundredandfortytwo.js";

let value: ThreeHundredAndFiftyFive = {
  next: {
    enabled: false,
    scope: "selected_repos",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload355Previous](../models/usereventpayload355previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload355Next](../models/usereventpayload355next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |