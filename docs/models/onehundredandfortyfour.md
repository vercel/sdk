# OneHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyFour } from "@vercel/sdk/models/jobproject.js";

let value: OneHundredAndFortyFour = {
  mode: "none",
  previousMode: null,
  scope: "organization",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `mode`                                                                   | [models.UserEventPayloadMode](../models/usereventpayloadmode.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `previousMode`                                                           | [models.PreviousMode](../models/previousmode.md)                         | :heavy_check_mark:                                                       | N/A                                                                      |
| `scope`                                                                  | [models.UserEventPayload144Scope](../models/usereventpayload144scope.md) | :heavy_check_mark:                                                       | N/A                                                                      |