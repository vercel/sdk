# TwoHundredAndSixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyOne } from "@vercel/sdk/models/oldoptionsallowlist.js";

let value: TwoHundredAndSixtyOne = {
  next: {
    enabled: true,
    scope: "selected_repos",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload261Previous](../models/usereventpayload261previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload261Next](../models/usereventpayload261next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |