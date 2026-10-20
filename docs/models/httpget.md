# HttpGet

## Example Usage

```typescript
import { HttpGet } from "@vercel/sdk/models/getprojectboxesop.js";

let value: HttpGet = {
  path: "/usr",
  port: 6897.4,
  scheme: "HTTPS",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `host`                                           | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `httpHeaders`                                    | [models.HttpHeaders](../models/httpheaders.md)[] | :heavy_minus_sign:                               | N/A                                              |
| `path`                                           | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `port`                                           | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `scheme`                                         | [models.Scheme](../models/scheme.md)             | :heavy_check_mark:                               | N/A                                              |