# OneHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventy } from "@vercel/sdk/models/payloadteamroles.js";

let value: OneHundredAndSeventy = {
  projectId: "<id>",
  previous: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 1722.11,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: true,
  },
  next: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 9830.04,
    newResourceBlockingPolicy: "block",
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