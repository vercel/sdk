# OneHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwenty } from "@vercel/sdk/models/job4.js";

let value: OneHundredAndTwenty = {
  mode: null,
  previousMode: null,
  scope: "organization",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `mode`                                                                   | [models.UserEventPayload120Mode](../models/usereventpayload120mode.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `previousMode`                                                           | [models.PreviousMode](../models/previousmode.md)                         | :heavy_check_mark:                                                       | N/A                                                                      |
| `scope`                                                                  | [models.UserEventPayload120Scope](../models/usereventpayload120scope.md) | :heavy_check_mark:                                                       | N/A                                                                      |