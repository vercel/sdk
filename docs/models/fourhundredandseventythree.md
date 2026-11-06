# FourHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyThree } from "@vercel/sdk/models/usereventpayload465actortype.js";

let value: FourHundredAndSeventyThree = {
  method: "totp",
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