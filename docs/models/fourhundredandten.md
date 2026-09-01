# FourHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTen } from "@vercel/sdk/models/fourhundredandtwo.js";

let value: FourHundredAndTen = {
  remaining: 6382.62,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |