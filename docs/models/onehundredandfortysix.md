# OneHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortySix } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortySix = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Blaze_Maggio@yahoo.com",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `team`                                                                 | [models.UserEventPayload146Team](../models/usereventpayload146team.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousRule`                                                         | [models.PayloadPreviousRule](../models/payloadpreviousrule.md)         | :heavy_check_mark:                                                     | N/A                                                                    |