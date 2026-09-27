# SelectorOptions

For kind=router: option slices keyed by selector name; each selector owns its slice's shape.

## Example Usage

```typescript
import { SelectorOptions } from "@vercel/sdk/models/aigatewayvirtualmodelconfig.js";

let value: SelectorOptions = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `cost`                                                                                       | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | For kind=router: option slices keyed by selector name; each selector owns its slice's shape. |
| `tps`                                                                                        | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | For kind=router: option slices keyed by selector name; each selector owns its slice's shape. |
| `ttft`                                                                                       | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | For kind=router: option slices keyed by selector name; each selector owns its slice's shape. |