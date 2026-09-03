# SixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFour } from "@vercel/sdk/models/ceilingmode.js";

let value: SixtyFour = {
  changedFields: [
    "email",
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `changedFields`                                      | [models.ChangedFields](../models/changedfields.md)[] | :heavy_check_mark:                                   | N/A                                                  |