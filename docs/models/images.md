# Images

## Example Usage

```typescript
import { Images } from "@vercel/sdk/models/createdeploymentop.js";

let value: Images = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `sizes`                                                              | *number*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `qualities`                                                          | *number*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `domains`                                                            | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `remotePatterns`                                                     | [models.RemotePatterns](../models/remotepatterns.md)[]               | :heavy_minus_sign:                                                   | N/A                                                                  |
| `localPatterns`                                                      | [models.LocalPatterns](../models/localpatterns.md)[]                 | :heavy_minus_sign:                                                   | N/A                                                                  |
| `minimumCacheTTL`                                                    | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `formats`                                                            | [models.Formats](../models/formats.md)[]                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `dangerouslyAllowSVG`                                                | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `contentSecurityPolicy`                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `contentDispositionType`                                             | [models.ContentDispositionType](../models/contentdispositiontype.md) | :heavy_minus_sign:                                                   | N/A                                                                  |