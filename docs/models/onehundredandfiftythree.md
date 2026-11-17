# OneHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyThree } from "@vercel/sdk/models/usereventpayloadallowlistedreadystatereasoninternal.js";

let value: OneHundredAndFiftyThree = {
  customNameservers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  domain: "functional-brook.name",
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