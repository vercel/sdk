# OneHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyOne } from "@vercel/sdk/models/job2.js";

let value: OneHundredAndFortyOne = {
  mode: "all",
  previousMode: "email-domain",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `mode`                                                                 | [models.UserEventPayload141Mode](../models/usereventpayload141mode.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousMode`                                                         | [models.PayloadPreviousMode](../models/payloadpreviousmode.md)         | :heavy_check_mark:                                                     | N/A                                                                    |