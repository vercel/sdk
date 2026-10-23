# ThreeHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyEight } from "@vercel/sdk/models/usereventpayload385type.js";

let value: ThreeHundredAndNinetyEight = {
  next: {
    enabled: true,
    includeDrafts: false,
    scope: "selected_repos",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload398Next](../models/usereventpayload398next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload398Previous](../models/usereventpayload398previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |