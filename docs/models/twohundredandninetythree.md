# TwoHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyThree } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndNinetyThree = {
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
| `previous`                                                                     | [models.UserEventPayload293Previous](../models/usereventpayload293previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload293Next](../models/usereventpayload293next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |