# Two

For kind=router: ordered candidates, bare slugs/references or `{ slug, ...attributes }`. For kind=alias: ordered fallback model slugs, optionally led by one conditional `{ model, when }` entry, used when the primary model's answers match `when`.

## Example Usage

```typescript
import { Two } from "@vercel/sdk/models/aigatewayvirtualmodelconfig.js";

let value: Two = {
  slug: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `capability`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | Highest task level the member handles, in [0, 1]. Read by the capability selector. |
| `slug`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |