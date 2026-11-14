# EightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyEight } from "@vercel/sdk/models/deployment.js";

let value: EightyEight = {
  changedFields: [
    "purchaseOrder",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `changedFields`                                                                      | [models.UserEventPayloadChangedFields](../models/usereventpayloadchangedfields.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |