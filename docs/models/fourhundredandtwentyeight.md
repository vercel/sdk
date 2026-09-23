# FourHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyEight } from "@vercel/sdk/models/fourhundredandeleven.js";

let value: FourHundredAndTwentyEight = {
  method: "webauthn",
  reason: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `flowId`                             | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `loginSessionId`                     | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `method`                             | [models.Method](../models/method.md) | :heavy_check_mark:                   | N/A                                  |
| `reason`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |