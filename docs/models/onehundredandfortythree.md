# OneHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyThree } from "@vercel/sdk/models/job5.js";

let value: OneHundredAndFortyThree = {
  mode: "all",
  previousMode: "email-domain",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `mode`                                                                 | [models.UserEventPayload143Mode](../models/usereventpayload143mode.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousMode`                                                         | [models.PayloadPreviousMode](../models/payloadpreviousmode.md)         | :heavy_check_mark:                                                     | N/A                                                                    |