# GetIntegrationResourcesNotification

The notification, if set, displayed to the user when viewing the resource in Vercel

## Example Usage

```typescript
import { GetIntegrationResourcesNotification } from "@vercel/sdk/models/getintegrationresourcesop.js";

let value: GetIntegrationResourcesNotification = {
  level: "info",
  title: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `level`                                                                          | [models.GetIntegrationResourcesLevel](../models/getintegrationresourceslevel.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `title`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `message`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `href`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |