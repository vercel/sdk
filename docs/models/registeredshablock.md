# RegisteredShaBlock

Since September 2026. The git SHA a non-cascading hard block of this owner auto-registered in the lineage blocklist, so unblocking can disable the row that block created. Lives on the owner rather than a project block because this registration path runs only when the block did not cascade, leaving the owner's single project unblocked and with no block record to carry it. Absent means the block registered nothing, which includes the case where registration was skipped because the SHA already belonged to an earlier block. Unblock must clear only what is named here.

## Example Usage

```typescript
import { RegisteredShaBlock } from "@vercel/sdk/models/sourceimages.js";

let value: RegisteredShaBlock = {
  createdAt: "1730662995923",
  createdBy: "<value>",
  sha: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `createdAt`        | *string*           | :heavy_check_mark: | N/A                |
| `createdBy`        | *string*           | :heavy_check_mark: | N/A                |
| `sha`              | *string*           | :heavy_check_mark: | N/A                |