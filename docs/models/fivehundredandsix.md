# FiveHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndSix } from "@vercel/sdk/models/fourhundredandthirtynine.js";

let value: FiveHundredAndSix = {
  remaining: 3525.6,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |