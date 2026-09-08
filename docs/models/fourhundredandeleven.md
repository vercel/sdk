# FourHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEleven } from "@vercel/sdk/models/fourhundredandsix.js";

let value: FourHundredAndEleven = {
  allowedMethods: [
    "totp",
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