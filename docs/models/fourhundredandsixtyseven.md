# FourHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtySeven } from "@vercel/sdk/models/usereventpayload453actortype.js";

let value: FourHundredAndSixtySeven = {
  remaining: 2136.74,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |