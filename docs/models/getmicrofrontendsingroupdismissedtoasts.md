# GetMicrofrontendsInGroupDismissedToasts

## Example Usage

```typescript
import { GetMicrofrontendsInGroupDismissedToasts } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupDismissedToasts = {
  key: "<key>",
  dismissedAt: 1752.12,
  action: "accept",
  value: null,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `key`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `dismissedAt`                                                                        | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `action`                                                                             | [models.GetMicrofrontendsInGroupAction](../models/getmicrofrontendsingroupaction.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `value`                                                                              | *models.GetMicrofrontendsInGroupValue*                                               | :heavy_check_mark:                                                                   | N/A                                                                                  |