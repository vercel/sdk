# FiveHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundred } from "@vercel/sdk/models/usereventpayload499next.js";

let value: FiveHundred = {
  remaining: 4470.3,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |