# FourHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyThree } from "@vercel/sdk/models/usereventpayload403type.js";

let value: FourHundredAndSixtyThree = {
  reason: "limits-exceeded",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `reason`                                                             | [models.UserEventPayloadReason](../models/usereventpayloadreason.md) | :heavy_check_mark:                                                   | N/A                                                                  |