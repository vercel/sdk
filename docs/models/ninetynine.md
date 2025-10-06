# NinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyNine } from "@vercel/sdk/models/userevent.js";

let value: NinetyNine = {
  team: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `team`                                                               | [models.UserEventPayload99Team](../models/usereventpayload99team.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `previousRule`                                                       | [models.PreviousRule](../models/previousrule.md)                     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `nextRule`                                                           | [models.NextRule](../models/nextrule.md)                             | :heavy_minus_sign:                                                   | N/A                                                                  |