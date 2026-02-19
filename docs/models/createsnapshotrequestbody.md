# CreateSnapshotRequestBody

## Example Usage

```typescript
import { CreateSnapshotRequestBody } from "@vercel/sdk/models/createsnapshotop.js";

let value: CreateSnapshotRequestBody = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `expiration`                                                                                             | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The number of milliseconds after which the snapshot will expire and be deleted. Use 0 for no expiration. |