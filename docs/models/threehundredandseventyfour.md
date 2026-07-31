# ThreeHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyFour } from "@vercel/sdk/models/threehundredandsixty.js";

let value: ThreeHundredAndSeventyFour = {
  method: "webauthn",
  reason: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `method`                             | [models.Method](../models/method.md) | :heavy_check_mark:                   | N/A                                  |
| `reason`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |