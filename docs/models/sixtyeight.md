# SixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyEight } from "@vercel/sdk/models/ceilingmode.js";

let value: SixtyEight = {
  action: "mutate",
  data: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `subscriptionId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `action`                                                                 | [models.UserEventPayload68Action](../models/usereventpayload68action.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `data`                                                                   | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |