# FourHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyTwo } from "@vercel/sdk/models/fourhundredandone.js";

let value: FourHundredAndTwentyTwo = {
  remaining: 4411.76,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |