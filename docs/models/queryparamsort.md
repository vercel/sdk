# QueryParamSort

Sort by name in ascending order, or by creation or update time in descending order.

## Example Usage

```typescript
import { QueryParamSort } from "@vercel/sdk/models/listconnectorsop.js";

let value: QueryParamSort = "createdAt";
```

## Values

```typescript
"name" | "createdAt" | "updatedAt"
```