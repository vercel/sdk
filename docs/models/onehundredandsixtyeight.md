# OneHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyEight } from "@vercel/sdk/models/usereventpayloadgituserid.js";

let value: OneHundredAndSixtyEight = {
  projectId: "<id>",
  previous: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 8318.76,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: false,
  },
  next: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 5374.31,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: false,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `projectId`                              | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `previous`                               | [models.Previous](../models/previous.md) | :heavy_check_mark:                       | N/A                                      |
| `next`                                   | [models.Next](../models/next.md)         | :heavy_check_mark:                       | N/A                                      |