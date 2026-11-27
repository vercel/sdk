# OneHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortySix } from "@vercel/sdk/models/usereventjobpayload1405provider.js";

let value: OneHundredAndFortySix = {
  mode: "email-domain",
  previousMode: "all",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `mode`                                                                 | [models.UserEventPayload146Mode](../models/usereventpayload146mode.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousMode`                                                         | [models.PayloadPreviousMode](../models/payloadpreviousmode.md)         | :heavy_check_mark:                                                     | N/A                                                                    |