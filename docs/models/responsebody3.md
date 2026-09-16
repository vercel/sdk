# ResponseBody3

## Example Usage

```typescript
import { ResponseBody3 } from "@vercel/sdk/models/getredirectsop.js";

let value: ResponseBody3 = {
  pagination: {
    numPages: 8356.94,
    page: 4187.18,
    perPage: 8377.18,
  },
  redirects: [
    {
      destination: "<value>",
      source: "<value>",
    },
  ],
  version: {
    createdBy: "<value>",
    id: "<id>",
    key: "<key>",
    lastModified: 8198.95,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `pagination`                                                                                                           | [models.GetRedirectsResponseBodyBulkRedirectsPagination](../models/getredirectsresponsebodybulkredirectspagination.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `redirects`                                                                                                            | [models.GetRedirectsResponseBodyRedirects](../models/getredirectsresponsebodyredirects.md)[]                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `version`                                                                                                              | [models.GetRedirectsResponseBodyVersion](../models/getredirectsresponsebodyversion.md)                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |