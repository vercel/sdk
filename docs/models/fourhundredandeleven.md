# FourHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEleven } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: FourHundredAndEleven = {
  decision: "turn_off",
  version: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `decision`                               | [models.Decision](../models/decision.md) | :heavy_check_mark:                       | N/A                                      |
| `version`                                | *string*                                 | :heavy_check_mark:                       | N/A                                      |