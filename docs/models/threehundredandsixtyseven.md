# ThreeHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtySeven } from "@vercel/sdk/models/usereventpayloadrole.js";

let value: ThreeHundredAndSixtySeven = {
  name: {
    name: "<value>",
  },
  uid: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `name`               | *models.PayloadName* | :heavy_check_mark:   | N/A                  |
| `uid`                | *string*             | :heavy_check_mark:   | N/A                  |