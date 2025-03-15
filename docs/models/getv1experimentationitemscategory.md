# GetV1ExperimentationItemsCategory

An optional functional category for the item. Categorization semantics are: - flag (can resolve variants, can freely update variant resolution, usually does not perform analysis) - experiment (has variants, constrains changes to variant allocations, performs analysis) Using statsig as an example: - FeatureGate -> flag - Experiment -> experiment - Autotune -> experiment Forwards compatibility for other primitives can be considered, ex. `DynamicConfig`, `Holdouts`, `Layers`

## Example Usage

```typescript
import { GetV1ExperimentationItemsCategory } from "@vercel/sdk/models/getv1experimentationitemsop.js";

let value: GetV1ExperimentationItemsCategory = "experiment";
```

## Values

```typescript
"experiment" | "flag"
```