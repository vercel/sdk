# FiveHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwo } from "@vercel/sdk/models/fourhundredandthirtyfive.js";

let value: FiveHundredAndTwo = {
  remaining: 4187.06,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |