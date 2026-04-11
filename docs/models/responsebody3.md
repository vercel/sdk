# ResponseBody3

## Example Usage

```typescript
import { ResponseBody3 } from "@vercel/sdk/models/getredirectsop.js";

let value: ResponseBody3 = {
  redirects: [
    {
      destination: "<value>",
      source: "<value>",
    },
  ],
  pagination: {
    page: 4187.18,
    perPage: 8377.18,
    numPages: 6882.51,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `redirects`                                                                                                            | [models.GetRedirectsResponseBodyRedirects](../models/getredirectsresponsebodyredirects.md)[]                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `version`                                                                                                              | [models.GetRedirectsResponseBodyVersion](../models/getredirectsresponsebodyversion.md)                                 | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `pagination`                                                                                                           | [models.GetRedirectsResponseBodyBulkRedirectsPagination](../models/getredirectsresponsebodybulkredirectspagination.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |