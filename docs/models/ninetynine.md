# NinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyNine } from "@vercel/sdk/models/userevent.js";

let value: NinetyNine = {
  team: {
    id: "<id>",
  },
  previousRule: {
    email: "Johan3@yahoo.com",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `team`                                                               | [models.UserEventPayload99Team](../models/usereventpayload99team.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `previousRule`                                                       | [models.PayloadPreviousRule](../models/payloadpreviousrule.md)       | :heavy_check_mark:                                                   | N/A                                                                  |