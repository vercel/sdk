# ThreeHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinety } from "@vercel/sdk/models/budgetitem.js";

let value: ThreeHundredAndNinety = {
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
| `next`                                                                         | [models.UserEventPayload390Next](../models/usereventpayload390next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload390Previous](../models/usereventpayload390previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |