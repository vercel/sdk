# DefaultCoveredCounts

Paged requests only: `source: 'default'` rows per scope type across the whole `scopeType`-filtered list, independent of the page and of `includeDefaultCovered`.

## Example Usage

```typescript
import { DefaultCoveredCounts } from "@vercel/sdk/models/aigatewaybudgetlist.js";

let value: DefaultCoveredCounts = {
  apiKey: 8656.14,
  project: 4470.83,
  team: 1628.85,
  user: 139.2,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `apiKey`           | *number*           | :heavy_check_mark: | N/A                |
| `project`          | *number*           | :heavy_check_mark: | N/A                |
| `team`             | *number*           | :heavy_check_mark: | N/A                |
| `user`             | *number*           | :heavy_check_mark: | N/A                |