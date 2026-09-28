# FourHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtySeven } from "@vercel/sdk/models/fourhundredandsixteen.js";

let value: FourHundredAndThirtySeven = {
  remaining: 4131.14,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `context`                                                    | [models.Context](../models/context.md)                       | :heavy_minus_sign:                                           | Absent on events predating the field; those were all logins. |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |