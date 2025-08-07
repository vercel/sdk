# NinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySix } from "@vercel/sdk/models/userevent.js";

let value: NinetySix = {
  team: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `team`                                                               | [models.UserEventPayload96Team](../models/usereventpayload96team.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `previousRule`                                                       | [models.PreviousRule](../models/previousrule.md)                     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `nextRule`                                                           | [models.NextRule](../models/nextrule.md)                             | :heavy_minus_sign:                                                   | N/A                                                                  |