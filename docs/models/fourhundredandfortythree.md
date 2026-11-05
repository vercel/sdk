# FourHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyThree } from "@vercel/sdk/models/store.js";

let value: FourHundredAndFortyThree = {
  decision: "keep_on",
  version: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `decision`                               | [models.Decision](../models/decision.md) | :heavy_check_mark:                       | N/A                                      |
| `version`                                | *string*                                 | :heavy_check_mark:                       | N/A                                      |