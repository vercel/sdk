# OneHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSeven = {
  projectId: "<id>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `projectId`                                  | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `reasonCode`                                 | [models.ReasonCode](../models/reasoncode.md) | :heavy_minus_sign:                           | N/A                                          |