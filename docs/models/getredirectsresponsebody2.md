# GetRedirectsResponseBody2

## Example Usage

```typescript
import { GetRedirectsResponseBody2 } from "@vercel/sdk/models/getredirectsop.js";

let value: GetRedirectsResponseBody2 = {
  redirects: [],
  pagination: {
    page: 3516.57,
    perPage: 4243.02,
    numPages: 1133.45,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `redirects`                                                                                  | [models.ResponseBodyRedirects](../models/responsebodyredirects.md)[]                         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `version`                                                                                    | [models.ResponseBodyVersion](../models/responsebodyversion.md)                               | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `pagination`                                                                                 | [models.GetRedirectsResponseBodyPagination](../models/getredirectsresponsebodypagination.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |