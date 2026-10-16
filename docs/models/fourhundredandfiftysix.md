# FourHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftySix } from "@vercel/sdk/models/fourhundredandthirtyeight.js";

let value: FourHundredAndFiftySix = {
  remaining: 4404.87,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |