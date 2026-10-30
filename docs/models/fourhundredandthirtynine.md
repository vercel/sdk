# FourHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyNine } from "@vercel/sdk/models/usereventpayload390type.js";

let value: FourHundredAndThirtyNine = {
  decision: "turn_off",
  version: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `decision`                               | [models.Decision](../models/decision.md) | :heavy_check_mark:                       | N/A                                      |
| `version`                                | *string*                                 | :heavy_check_mark:                       | N/A                                      |