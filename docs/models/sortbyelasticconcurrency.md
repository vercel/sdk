# SortByElasticConcurrency

Sort results by elastic concurrency status. desc = enabled projects first, asc = disabled projects first

## Example Usage

```typescript
import { SortByElasticConcurrency } from "@vercel/sdk/models/getprojectsop.js";

let value: SortByElasticConcurrency = "desc";
```

## Values

```typescript
"desc" | "asc"
```