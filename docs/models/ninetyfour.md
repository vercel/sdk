# NinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFour } from "@vercel/sdk/models/userevent.js";

let value: NinetyFour = {
  team: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `team`                                                               | [models.UserEventPayload94Team](../models/usereventpayload94team.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `previousRule`                                                       | [models.PreviousRule](../models/previousrule.md)                     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `nextRule`                                                           | [models.NextRule](../models/nextrule.md)                             | :heavy_minus_sign:                                                   | N/A                                                                  |