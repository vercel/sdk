# GetRoutesResponseBodyRouteType

Computed route type based on the route configuration. Only present in API responses, not stored in S3.

## Example Usage

```typescript
import { GetRoutesResponseBodyRouteType } from "@vercel/sdk/models/getroutesop.js";

let value: GetRoutesResponseBodyRouteType = "redirect";
```

## Values

```typescript
"redirect" | "rewrite" | "set_status" | "transform"
```