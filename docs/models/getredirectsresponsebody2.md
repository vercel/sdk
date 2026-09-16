# GetRedirectsResponseBody2

## Example Usage

```typescript
import { GetRedirectsResponseBody2 } from "@vercel/sdk/models/getredirectsop.js";

let value: GetRedirectsResponseBody2 = {
  pagination: {
    numPages: 1969.09,
    page: 3516.57,
    perPage: 4243.02,
  },
  redirects: [],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `pagination`                                                                                 | [models.GetRedirectsResponseBodyPagination](../models/getredirectsresponsebodypagination.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `redirects`                                                                                  | [models.ResponseBodyRedirects](../models/responsebodyredirects.md)[]                         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `version`                                                                                    | [models.ResponseBodyVersion](../models/responsebodyversion.md)                               | :heavy_minus_sign:                                                                           | N/A                                                                                          |