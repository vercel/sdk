# FourHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwelve } from "@vercel/sdk/models/fourhundredandfour.js";

let value: FourHundredAndTwelve = {
  remaining: 5326.88,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |