# FourHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyFour } from "@vercel/sdk/models/fourhundredandtwentythree.js";

let value: FourHundredAndFortyFour = {
  remaining: 4176.74,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |