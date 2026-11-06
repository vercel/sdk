# FourHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFive } from "@vercel/sdk/models/store.js";

let value: FourHundredAndFive = {
  next: {
    enabled: false,
    includeDrafts: false,
    scope: "selected_repos",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload405Next](../models/usereventpayload405next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload405Previous](../models/usereventpayload405previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |