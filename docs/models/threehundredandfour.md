# ThreeHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFour } from "@vercel/sdk/models/ssoprotectiondeploymenttype.js";

let value: ThreeHundredAndFour = {
  uid: "<id>",
  name: {
    name: "<value>",
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `uid`                | *string*             | :heavy_check_mark:   | N/A                  |
| `name`               | *models.PayloadName* | :heavy_check_mark:   | N/A                  |