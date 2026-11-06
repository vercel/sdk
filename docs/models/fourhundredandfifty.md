# FourHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFifty } from "@vercel/sdk/models/store.js";

let value: FourHundredAndFifty = {
  enabled: false,
  scope: "log-drains",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `enabled`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `scope`                                                                  | [models.UserEventPayload450Scope](../models/usereventpayload450scope.md) | :heavy_check_mark:                                                       | N/A                                                                      |