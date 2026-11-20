# FourHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyNine } from "@vercel/sdk/models/fourhundredandthirtyfive.js";

let value: FourHundredAndNinetyNine = {
  allowedMethods: [
    "recovery-code",
  ],
  firstFactor: "<value>",
  flowId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `allowedMethods`                                       | [models.AllowedMethods](../models/allowedmethods.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `firstFactor`                                          | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `flowId`                                               | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `loginSessionId`                                       | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |