# FourHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyThree } from "@vercel/sdk/models/usereventpayload471actortype.js";

let value: FourHundredAndEightyThree = {
  remaining: 4452.14,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |