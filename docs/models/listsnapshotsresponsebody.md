# ListSnapshotsResponseBody

## Example Usage

```typescript
import { ListSnapshotsResponseBody } from "@vercel/sdk/models/listsnapshotsop.js";

let value: ListSnapshotsResponseBody = {
  snapshots: [],
  pagination: {
    total: 1623.66,
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `snapshots`                                                            | [models.Snapshot](../models/snapshot.md)[]                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [models.ListSnapshotsPagination](../models/listsnapshotspagination.md) | :heavy_check_mark:                                                     | N/A                                                                    |