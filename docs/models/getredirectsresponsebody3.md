# GetRedirectsResponseBody3

## Example Usage

```typescript
import { GetRedirectsResponseBody3 } from "@vercel/sdk/models/getredirectsop.js";

let value: GetRedirectsResponseBody3 = {
  pagination: {
    numPages: 3298.42,
    page: 104.86,
    perPage: 39.09,
  },
  redirects: [],
  version: {
    createdBy: "<value>",
    id: "<id>",
    key: "<key>",
    lastModified: 2204.46,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `pagination`                                                                                                           | [models.GetRedirectsResponseBodyBulkRedirectsPagination](../models/getredirectsresponsebodybulkredirectspagination.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `redirects`                                                                                                            | [models.GetRedirectsResponseBodyRedirects](../models/getredirectsresponsebodyredirects.md)[]                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `version`                                                                                                              | [models.GetRedirectsResponseBodyVersion](../models/getredirectsresponsebodyversion.md)                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |