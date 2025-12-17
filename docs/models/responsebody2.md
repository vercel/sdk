# ResponseBody2

## Example Usage

```typescript
import { ResponseBody2 } from "@vercel/sdk/models/getv1bulkredirectsop.js";

let value: ResponseBody2 = {
  redirects: [],
  pagination: {
    page: 6694.72,
    perPage: 3135.84,
    numPages: 5122.21,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `redirects`                                                          | [models.ResponseBodyRedirects](../models/responsebodyredirects.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `version`                                                            | [models.ResponseBodyVersion](../models/responsebodyversion.md)       | :heavy_minus_sign:                                                   | N/A                                                                  |
| `pagination`                                                         | [models.ResponseBodyPagination](../models/responsebodypagination.md) | :heavy_check_mark:                                                   | N/A                                                                  |