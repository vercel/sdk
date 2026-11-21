# NinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFour } from "@vercel/sdk/models/usereventpayloaditems.js";

let value: NinetyFour = {
  changedFields: [
    "name",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `changedFields`                                                                      | [models.UserEventPayloadChangedFields](../models/usereventpayloadchangedfields.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |