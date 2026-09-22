# ProjectCardWidgetPreferences

## Example Usage

```typescript
import { ProjectCardWidgetPreferences } from "@vercel/sdk/models/onehundredandfiftyfive.js";

let value: ProjectCardWidgetPreferences = {
  projectId: "<id>",
  widget: "analytics-online",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `config`                                           | [models.Config](../models/config.md)               | :heavy_minus_sign:                                 | N/A                                                |
| `projectId`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `widget`                                           | [models.PayloadWidget](../models/payloadwidget.md) | :heavy_check_mark:                                 | N/A                                                |