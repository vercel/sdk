# FourHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyNine } from "@vercel/sdk/models/usereventpayload404type.js";

let value: FourHundredAndFortyNine = {
  decision: "turn_off",
  version: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `decision`                               | [models.Decision](../models/decision.md) | :heavy_check_mark:                       | N/A                                      |
| `version`                                | *string*                                 | :heavy_check_mark:                       | N/A                                      |