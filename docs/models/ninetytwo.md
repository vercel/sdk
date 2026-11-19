# NinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyTwo } from "@vercel/sdk/models/payloadresources.js";

let value: NinetyTwo = {
  changedFields: [
    "purchaseOrder",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `changedFields`                                                                      | [models.UserEventPayloadChangedFields](../models/usereventpayloadchangedfields.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |