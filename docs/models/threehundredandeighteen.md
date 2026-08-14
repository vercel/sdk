# ThreeHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighteen } from "@vercel/sdk/models/usereventpayloadgitprovider.js";

let value: ThreeHundredAndEighteen = {
  uid: "<id>",
  name: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `uid`                | *string*             | :heavy_check_mark:   | N/A                  |
| `name`               | *models.PayloadName* | :heavy_check_mark:   | N/A                  |