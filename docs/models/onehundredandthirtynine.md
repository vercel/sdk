# OneHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyNine } from "@vercel/sdk/models/usereventpayloadallowlistedreadystatereasoninternal.js";

let value: OneHundredAndThirtyNine = {
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
| `scope`                                                                  | [models.UserEventPayload139Scope](../models/usereventpayload139scope.md) | :heavy_check_mark:                                                       | N/A                                                                      |