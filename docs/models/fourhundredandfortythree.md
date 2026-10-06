# FourHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyThree } from "@vercel/sdk/models/fourhundredandtwentytwo.js";

let value: FourHundredAndFortyThree = {
  remaining: 553.75,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |