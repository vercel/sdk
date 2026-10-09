# FourHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFifty } from "@vercel/sdk/models/fourhundredandtwentynine.js";

let value: FourHundredAndFifty = {
  remaining: 6211.08,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |