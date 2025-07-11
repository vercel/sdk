# GetIntegrationResourceNotification

The notification, if set, displayed to the user when viewing the resource in Vercel

## Example Usage

```typescript
import { GetIntegrationResourceNotification } from "@vercel/sdk/models/getintegrationresourceop.js";

let value: GetIntegrationResourceNotification = {
  level: "error",
  title: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `level`                                                                        | [models.GetIntegrationResourceLevel](../models/getintegrationresourcelevel.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `title`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `href`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |