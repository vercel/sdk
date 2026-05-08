# TwoHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtySix } from "@vercel/sdk/models/twohundredandtwentythree.js";

let value: TwoHundredAndSixtySix = {
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
| `previous`                                                                     | [models.UserEventPayload266Previous](../models/usereventpayload266previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload266Next](../models/usereventpayload266next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |