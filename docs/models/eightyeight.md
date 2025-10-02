# EightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyEight } from "@vercel/sdk/models/userevent.js";

let value: EightyEight = {
  projectId: "<id>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `projectId`                                  | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `reasonCode`                                 | [models.ReasonCode](../models/reasoncode.md) | :heavy_minus_sign:                           | N/A                                          |