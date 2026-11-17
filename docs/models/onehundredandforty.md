# OneHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndForty } from "@vercel/sdk/models/usereventpayloadallowlistedreadystatereasoninternal.js";

let value: OneHundredAndForty = {
  mode: "none",
  previousMode: "email-domain",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `mode`                                                                 | [models.UserEventPayload140Mode](../models/usereventpayload140mode.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousMode`                                                         | [models.PayloadPreviousMode](../models/payloadpreviousmode.md)         | :heavy_check_mark:                                                     | N/A                                                                    |