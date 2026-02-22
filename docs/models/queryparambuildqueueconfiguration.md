# QueryParamBuildQueueConfiguration

Filter results by build queue configuration. SKIP_NAMESPACE_QUEUE includes projects without a configuration set.

## Example Usage

```typescript
import { QueryParamBuildQueueConfiguration } from "@vercel/sdk/models/getprojectsblockhistoryprojects3.js";

let value: QueryParamBuildQueueConfiguration = "SKIP_NAMESPACE_QUEUE";
```

## Values

```typescript
"SKIP_NAMESPACE_QUEUE" | "WAIT_FOR_NAMESPACE_QUEUE"
```