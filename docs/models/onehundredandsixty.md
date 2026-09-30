# OneHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixty } from "@vercel/sdk/models/job4.js";

let value: OneHundredAndSixty = {
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
| `team`                                                                 | [models.UserEventPayload160Team](../models/usereventpayload160team.md) | :heavy_check_mark:                                                     | N/A                                                                    |