# TwoHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyNine } from "@vercel/sdk/models/rollbackdescription.js";

let value: TwoHundredAndNinetyNine = {
  next: {
    enabled: false,
    scope: "all",
    includeDrafts: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload299Previous](../models/usereventpayload299previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload299Next](../models/usereventpayload299next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |