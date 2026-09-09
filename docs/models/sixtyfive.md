# SixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFive } from "@vercel/sdk/models/payloadrule.js";

let value: SixtyFive = {
  changedFields: [
    "email",
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `changedFields`                                      | [models.ChangedFields](../models/changedfields.md)[] | :heavy_check_mark:                                   | N/A                                                  |