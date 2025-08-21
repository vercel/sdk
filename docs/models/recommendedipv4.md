# RecommendedIPv4

Recommended IPv4s for the domain. rank=1 is the preferred value(s) to use. Only using 1 ip value is acceptable.

## Example Usage

```typescript
import { RecommendedIPv4 } from "@vercel/sdk/models/getdomainconfigop.js";

let value: RecommendedIPv4 = {
  rank: 3568.19,
  value: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `rank`             | *number*           | :heavy_check_mark: | N/A                |
| `value`            | *string*[]         | :heavy_check_mark: | N/A                |