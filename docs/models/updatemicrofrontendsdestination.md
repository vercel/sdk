# UpdateMicrofrontendsDestination

Which tracing destination this rule applies to. `internal` is the hidden Vercel production-tracing drain (internal delivery); `external` is any customer-configured drain. Derived from the owning drain's delivery type when project tracing is computed; absent on configs persisted before this field existed.

## Example Usage

```typescript
import { UpdateMicrofrontendsDestination } from "@vercel/sdk/models/updatemicrofrontendsresponsebody.js";

let value: UpdateMicrofrontendsDestination = "internal";
```

## Values

```typescript
"external" | "internal"
```