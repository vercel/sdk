# ResponseBodyAnonymous

## Example Usage

```typescript
import { ResponseBodyAnonymous } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: ResponseBodyAnonymous = {
  expiresAt: 1753120000000,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `expiresAt`                                                       | *number*                                                          | :heavy_check_mark:                                                | When the anonymous project and its token expire, in milliseconds. | 1753120000000                                                     |