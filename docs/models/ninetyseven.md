# NinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySeven } from "@vercel/sdk/models/userevent.js";

let value: NinetySeven = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Camryn.Feeney@yahoo.com",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `team`                                                               | [models.UserEventPayload97Team](../models/usereventpayload97team.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `previousRule`                                                       | [models.PayloadPreviousRule](../models/payloadpreviousrule.md)       | :heavy_check_mark:                                                   | N/A                                                                  |