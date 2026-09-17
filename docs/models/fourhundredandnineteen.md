# FourHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNineteen } from "@vercel/sdk/models/fourhundredandone.js";

let value: FourHundredAndNineteen = {
  allowedMethods: [],
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