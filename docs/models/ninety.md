# Ninety

The payload of the event, if requested.

## Example Usage

```typescript
import { Ninety } from "@vercel/sdk/models/usereventjobpayload76githashtagvercel.js";

let value: Ninety = {
  domain: "aggressive-valuable.name",
  customNameservers: [
    "<value 1>",
    "<value 2>",
  ],
  prevCustomNameservers: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `domain`                | *string*                | :heavy_check_mark:      | N/A                     |
| `customNameservers`     | *string*[]              | :heavy_check_mark:      | N/A                     |
| `prevCustomNameservers` | *string*[]              | :heavy_check_mark:      | N/A                     |