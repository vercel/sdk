# StrictShareableLinks

When enabled, creating shareable links requires Owner role.

## Example Usage

```typescript
import { StrictShareableLinks } from "@vercel/sdk/models/team.js";

let value: StrictShareableLinks = {
  enabled: true,
  updatedAt: 2176.1,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `updatedAt`        | *number*           | :heavy_check_mark: | N/A                |