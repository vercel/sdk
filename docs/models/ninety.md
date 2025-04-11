# Ninety

The payload of the event, if requested.

## Example Usage

```typescript
import { Ninety } from "@vercel/sdk/models/userevent.js";

let value: Ninety = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Vergie_Roberts@gmail.com",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `team`                                                               | [models.UserEventPayload90Team](../models/usereventpayload90team.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `previousRule`                                                       | [models.PayloadPreviousRule](../models/payloadpreviousrule.md)       | :heavy_check_mark:                                                   | N/A                                                                  |