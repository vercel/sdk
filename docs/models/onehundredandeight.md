# OneHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEight } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndEight = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Brennan.Swift-Robel26@gmail.com",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `team`                                                                 | [models.UserEventPayload108Team](../models/usereventpayload108team.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousRule`                                                         | [models.PayloadPreviousRule](../models/payloadpreviousrule.md)         | :heavy_check_mark:                                                     | N/A                                                                    |