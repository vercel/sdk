# OneHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyTwo } from "@vercel/sdk/models/job5.js";

let value: OneHundredAndFortyTwo = {
  mode: "none",
  previousMode: "none",
  scope: "organization",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `mode`                                                                   | [models.UserEventPayloadMode](../models/usereventpayloadmode.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `previousMode`                                                           | [models.PreviousMode](../models/previousmode.md)                         | :heavy_check_mark:                                                       | N/A                                                                      |
| `scope`                                                                  | [models.UserEventPayload142Scope](../models/usereventpayload142scope.md) | :heavy_check_mark:                                                       | N/A                                                                      |