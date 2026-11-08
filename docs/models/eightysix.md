# EightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySix } from "@vercel/sdk/models/rule.js";

let value: EightySix = {
  changedFields: [
    "name",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `changedFields`                                                                      | [models.UserEventPayloadChangedFields](../models/usereventpayloadchangedfields.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |