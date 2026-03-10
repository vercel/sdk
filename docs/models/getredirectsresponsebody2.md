# GetRedirectsResponseBody2

## Example Usage

```typescript
import { GetRedirectsResponseBody2 } from "@vercel/sdk/models/getredirectsop.js";

let value: GetRedirectsResponseBody2 = {
  version: {
    id: "<id>",
    key: "<key>",
    lastModified: 1969.09,
    createdBy: "<value>",
  },
  redirects: [],
  pagination: {
    page: 4243.02,
    perPage: 1133.45,
    numPages: 7672.1,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `version`                                                                                    | [models.ResponseBodyVersion](../models/responsebodyversion.md)                               | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `redirects`                                                                                  | [models.ResponseBodyRedirects](../models/responsebodyredirects.md)[]                         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `pagination`                                                                                 | [models.GetRedirectsResponseBodyPagination](../models/getredirectsresponsebodypagination.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |