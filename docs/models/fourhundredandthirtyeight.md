# FourHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyEight } from "@vercel/sdk/models/env.js";

let value: FourHundredAndThirtyEight = {
  reason: "limits-exceeded",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `reason`                                                             | [models.UserEventPayloadReason](../models/usereventpayloadreason.md) | :heavy_check_mark:                                                   | N/A                                                                  |