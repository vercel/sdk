# FourHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundred } from "@vercel/sdk/models/usereventpayload340budget.js";

let value: FourHundred = {
  reason: "limits-exceeded",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `reason`                                                             | [models.UserEventPayloadReason](../models/usereventpayloadreason.md) | :heavy_check_mark:                                                   | N/A                                                                  |