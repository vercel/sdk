# OneHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyFive } from "@vercel/sdk/models/usereventjobaction.js";

let value: OneHundredAndFiftyFive = {
  team: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `nextRule`                                                             | [models.NextRule](../models/nextrule.md)                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `previousRule`                                                         | [models.PayloadPreviousRule](../models/payloadpreviousrule.md)         | :heavy_minus_sign:                                                     | N/A                                                                    |
| `team`                                                                 | [models.UserEventPayload155Team](../models/usereventpayload155team.md) | :heavy_check_mark:                                                     | N/A                                                                    |