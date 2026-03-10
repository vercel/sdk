# GetRedirectsResponseBody3

## Example Usage

```typescript
import { GetRedirectsResponseBody3 } from "@vercel/sdk/models/getredirectsop.js";

let value: GetRedirectsResponseBody3 = {
  redirects: [],
  pagination: {
    page: 104.86,
    perPage: 39.09,
    numPages: 4737.62,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `redirects`                                                                                                            | [models.GetRedirectsResponseBodyRedirects](../models/getredirectsresponsebodyredirects.md)[]                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `version`                                                                                                              | [models.GetRedirectsResponseBodyVersion](../models/getredirectsresponsebodyversion.md)                                 | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `pagination`                                                                                                           | [models.GetRedirectsResponseBodyBulkRedirectsPagination](../models/getredirectsresponsebodybulkredirectspagination.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |