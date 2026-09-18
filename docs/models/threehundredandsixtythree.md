# ThreeHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyThree } from "@vercel/sdk/models/payloadcountry.js";

let value: ThreeHundredAndSixtyThree = {
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
| `next`                                                                         | [models.UserEventPayload363Next](../models/usereventpayload363next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload363Previous](../models/usereventpayload363previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |