# FourHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFifteen } from "@vercel/sdk/models/threehundredandsixty.js";

let value: FourHundredAndFifteen = {
  enabled: true,
  scope: "dashboard",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `enabled`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `scope`                                                                  | [models.UserEventPayload415Scope](../models/usereventpayload415scope.md) | :heavy_check_mark:                                                       | N/A                                                                      |