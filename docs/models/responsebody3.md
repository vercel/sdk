# ResponseBody3

## Example Usage

```typescript
import { ResponseBody3 } from "@vercel/sdk/models/getredirectsop.js";

let value: ResponseBody3 = {
  version: {
    id: "<id>",
    key: "<key>",
    lastModified: 8356.94,
    createdBy: "<value>",
  },
  redirects: [],
  pagination: {
    page: 8377.18,
    perPage: 6882.51,
    numPages: 8198.95,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                              | [models.GetRedirectsResponseBodyVersion](../models/getredirectsresponsebodyversion.md)                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `redirects`                                                                                                            | [models.GetRedirectsResponseBodyRedirects](../models/getredirectsresponsebodyredirects.md)[]                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `pagination`                                                                                                           | [models.GetRedirectsResponseBodyBulkRedirectsPagination](../models/getredirectsresponsebodybulkredirectspagination.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |