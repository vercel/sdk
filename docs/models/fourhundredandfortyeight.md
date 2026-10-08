# FourHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyEight } from "@vercel/sdk/models/fourhundredandtwentyseven.js";

let value: FourHundredAndFortyEight = {
  remaining: 8577.16,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |