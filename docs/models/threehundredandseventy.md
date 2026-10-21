# ThreeHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventy } from "@vercel/sdk/models/usereventpayload318project.js";

let value: ThreeHundredAndSeventy = {
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