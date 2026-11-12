# FourHundredAndEightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightySix } from "@vercel/sdk/models/usereventpayload474actortype.js";

let value: FourHundredAndEightySix = {
  remaining: 9606.9,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |