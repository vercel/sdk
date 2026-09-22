# GetMicrofrontendsInGroupBlockHistoryRegisteredShaBlock

Since September 2026. Set on the live `abuse.block` only, by the consumer that auto-registers this project's production git SHA in the lineage blocklist, so unblocking can disable the row this block created. Absent means this block registered nothing, which includes the case where registration was skipped because the SHA already belonged to an earlier block. Unblock must therefore clear only what is named here, never the project's current SHA, or it would disable another block's row.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupBlockHistoryRegisteredShaBlock } from "@vercel/sdk/models/getmicrofrontendsingrouphas2.js";

let value: GetMicrofrontendsInGroupBlockHistoryRegisteredShaBlock = {
  createdAt: "1716347821705",
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