# OneHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyTwo } from "@vercel/sdk/models/analyticsusage.js";

let value: OneHundredAndSixtyTwo = {
  projectId: "<id>",
  previous: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 7857.27,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: true,
  },
  next: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 3649.29,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: true,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `projectId`                              | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `previous`                               | [models.Previous](../models/previous.md) | :heavy_check_mark:                       | N/A                                      |
| `next`                                   | [models.Next](../models/next.md)         | :heavy_check_mark:                       | N/A                                      |