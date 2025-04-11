# Notification

## Example Usage

```typescript
import { Notification } from "@vercel/sdk/models/importresourceop.js";

let value: Notification = {
  level: "warn",
  title: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `level`                            | [models.Level](../models/level.md) | :heavy_check_mark:                 | N/A                                |
| `title`                            | *string*                           | :heavy_check_mark:                 | N/A                                |
| `message`                          | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `href`                             | *string*                           | :heavy_minus_sign:                 | N/A                                |