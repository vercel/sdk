# OneHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEleven } from "@vercel/sdk/models/eightytwo.js";

let value: OneHundredAndEleven = {
  team: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `team`                                                                 | [models.UserEventPayload111Team](../models/usereventpayload111team.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousRule`                                                         | [models.PayloadPreviousRule](../models/payloadpreviousrule.md)         | :heavy_minus_sign:                                                     | N/A                                                                    |
| `nextRule`                                                             | [models.NextRule](../models/nextrule.md)                               | :heavy_minus_sign:                                                     | N/A                                                                    |