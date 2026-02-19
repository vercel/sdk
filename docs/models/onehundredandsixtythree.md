# OneHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyThree } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixtyThree = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Hazle94@gmail.com",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `team`                                                                 | [models.UserEventPayload163Team](../models/usereventpayload163team.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousRule`                                                         | [models.PayloadPreviousRule](../models/payloadpreviousrule.md)         | :heavy_check_mark:                                                     | N/A                                                                    |