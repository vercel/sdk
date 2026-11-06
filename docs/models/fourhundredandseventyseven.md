# FourHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventySeven } from "@vercel/sdk/models/usereventpayload465actortype.js";

let value: FourHundredAndSeventySeven = {
  remaining: 3041.21,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |