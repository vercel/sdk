# Details

Labeled event details for progressive disclosure in the activity feed.

## Example Usage

```typescript
import { Details } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: Details = {
  label: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `display`                                                             | [models.Display](../models/display.md)                                | :heavy_minus_sign:                                                    | Recognition context that should remain visible in a compact feed row. |
| `label`                                                               | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `value`                                                               | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |