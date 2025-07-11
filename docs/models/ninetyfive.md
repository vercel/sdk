# NinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFive } from "@vercel/sdk/models/userevent.js";

let value: NinetyFive = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Johnathan.Effertz62@hotmail.com",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `team`                                                               | [models.UserEventPayload95Team](../models/usereventpayload95team.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `previousRule`                                                       | [models.PayloadPreviousRule](../models/payloadpreviousrule.md)       | :heavy_check_mark:                                                   | N/A                                                                  |