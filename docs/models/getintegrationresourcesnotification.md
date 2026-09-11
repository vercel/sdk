# GetIntegrationResourcesNotification

The notification, if set, displayed to the user when viewing the resource in Vercel

## Example Usage

```typescript
import { GetIntegrationResourcesNotification } from "@vercel/sdk/models/getintegrationresourcesop.js";

let value: GetIntegrationResourcesNotification = {
  title: "<value>",
  level: "info",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `title`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `level`                                                                          | [models.GetIntegrationResourcesLevel](../models/getintegrationresourceslevel.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `message`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `href`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |