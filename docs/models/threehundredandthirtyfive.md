# ThreeHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyFive } from "@vercel/sdk/models/removedprojects.js";

let value: ThreeHundredAndThirtyFive = {
  next: {
    enabled: true,
    scope: "selected_repos",
    includeDrafts: true,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload335Previous](../models/usereventpayload335previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |
| `next`                                                                         | [models.UserEventPayload335Next](../models/usereventpayload335next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |