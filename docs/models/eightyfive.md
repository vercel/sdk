# EightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFive } from "@vercel/sdk/models/rule.js";

let value: EightyFive = {
  changedFields: [
    "email",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `changedFields`                                                                      | [models.UserEventPayloadChangedFields](../models/usereventpayloadchangedfields.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |