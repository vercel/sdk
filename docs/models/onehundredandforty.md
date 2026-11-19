# OneHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndForty } from "@vercel/sdk/models/job4.js";

let value: OneHundredAndForty = {
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
| `scope`                                                                  | [models.UserEventPayload140Scope](../models/usereventpayload140scope.md) | :heavy_check_mark:                                                       | N/A                                                                      |