# ProjectCardWidgetPreferences

## Example Usage

```typescript
import { ProjectCardWidgetPreferences } from "@vercel/sdk/models/blobtotalavgsizeinbytes.js";

let value: ProjectCardWidgetPreferences = {
  projectId: "<id>",
  widget: "analytics-online",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `projectId`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `widget`                                           | [models.PayloadWidget](../models/payloadwidget.md) | :heavy_check_mark:                                 | N/A                                                |
| `config`                                           | [models.Config](../models/config.md)               | :heavy_minus_sign:                                 | N/A                                                |