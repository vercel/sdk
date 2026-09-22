# OneHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwelve } from "@vercel/sdk/models/jobdeployhook.js";

let value: OneHundredAndTwelve = {
  mode: null,
  previousMode: "none",
  scope: "organization",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `mode`                                                                 | [models.UserEventPayload112Mode](../models/usereventpayload112mode.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousMode`                                                         | [models.PreviousMode](../models/previousmode.md)                       | :heavy_check_mark:                                                     | N/A                                                                    |
| `scope`                                                                | [models.PayloadScope](../models/payloadscope.md)                       | :heavy_check_mark:                                                     | N/A                                                                    |