# Three

For kind=router: ordered candidates, bare slugs/references or `{ slug, ...attributes }`. For kind=alias: ordered fallback model slugs, optionally led by one conditional `{ model, when }` entry, used when the primary model's answers match `when`.

## Example Usage

```typescript
import { Three } from "@vercel/sdk/models/aigatewayvirtualmodelconfig.js";

let value: Three = {
  model: "Ranchero",
  when: {
    probabilityBetween: [],
    question: "<value>",
  },
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `model`                                       | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `when`                                        | *models.AiGatewayEvaluationFallbackCondition* | :heavy_check_mark:                            | N/A                                           |