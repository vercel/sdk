# FourHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventySix } from "@vercel/sdk/models/usereventpayload464actortype.js";

let value: FourHundredAndSeventySix = {
  remaining: 9100.59,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |