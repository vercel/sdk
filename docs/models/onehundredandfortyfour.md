# OneHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyFour } from "@vercel/sdk/models/usereventjobpayload125githashtagvercel.js";

let value: OneHundredAndFortyFour = {
  customNameservers: [],
  domain: "gorgeous-chops.com",
  prevCustomNameservers: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `customNameservers`     | *string*[]              | :heavy_check_mark:      | N/A                     |
| `domain`                | *string*                | :heavy_check_mark:      | N/A                     |
| `prevCustomNameservers` | *string*[]              | :heavy_check_mark:      | N/A                     |