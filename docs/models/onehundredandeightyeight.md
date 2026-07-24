# OneHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyEight } from "@vercel/sdk/models/payloaddismissals.js";

let value: OneHundredAndEightyEight = {
  projectId: "<id>",
  previous: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 7810.88,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: true,
  },
  next: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 8444.99,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: true,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `projectId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `previous`                                             | [models.PayloadPrevious](../models/payloadprevious.md) | :heavy_check_mark:                                     | N/A                                                    |
| `next`                                                 | [models.PayloadNext](../models/payloadnext.md)         | :heavy_check_mark:                                     | N/A                                                    |