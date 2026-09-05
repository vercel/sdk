# UpdateSessionNetworkPolicyAllowResponse

Answer matching requests from the proxy with this response instead of forwarding them to the origin. Combine with a `match` on an earlier rule to allow one sub-path and reject the rest of a domain.

## Example Usage

```typescript
import { UpdateSessionNetworkPolicyAllowResponse } from "@vercel/sdk/models/updatesessionnetworkpolicyop.js";

let value: UpdateSessionNetworkPolicyAllowResponse = {
  statusCode: 16241,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP status code returned to the sandbox.                                                         |
| `headers`                                                                                         | Record<string, *string*>                                                                          | :heavy_minus_sign:                                                                                | HTTP response headers. Framing and hop-by-hop headers are managed by the proxy and cannot be set. |
| `body`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | UTF-8 response body. Requires `contentType`.                                                      |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | Value of the `Content-Type` response header. Required when `body` is set.                         |