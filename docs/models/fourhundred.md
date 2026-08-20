# FourHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundred } from "@vercel/sdk/models/threehundredandninetysix.js";

let value: FourHundred = {
  method: "webauthn",
  reason: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `method`                             | [models.Method](../models/method.md) | :heavy_check_mark:                   | N/A                                  |
| `reason`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `flowId`                             | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `loginSessionId`                     | *string*                             | :heavy_minus_sign:                   | N/A                                  |