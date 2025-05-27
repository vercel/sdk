# NinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyThree } from "@vercel/sdk/models/userevent.js";

let value: NinetyThree = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Toby70@gmail.com",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `team`                                                               | [models.UserEventPayload93Team](../models/usereventpayload93team.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `previousRule`                                                       | [models.PayloadPreviousRule](../models/payloadpreviousrule.md)       | :heavy_check_mark:                                                   | N/A                                                                  |