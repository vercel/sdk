# ThreeHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyThree } from "@vercel/sdk/models/usereventpayload339budget.js";

let value: ThreeHundredAndFiftyThree = {
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
| `previous`                                                                     | [models.UserEventPayload353Previous](../models/usereventpayload353previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload353Next](../models/usereventpayload353next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |